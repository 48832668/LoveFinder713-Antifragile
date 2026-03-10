#!/usr/bin/env python3
"""
搜索仓库中的手机号码
支持多种格式：
- 中国大陆手机号：11位数字（1开头）
- 带分隔符：138-1234-5678
- 带国际区号：+86 13812345678
"""

import os
import re
import argparse
from pathlib import Path
from typing import List, Tuple

# 手机号码正则表达式模式
PHONE_PATTERNS = [
    # 中国大陆手机号（纯数字，11位，1开头）
    (r'(?<!\d)1[3-9]\d{9}(?!\d)', '中国大陆手机号(纯数字)'),
    # 带横线分隔的手机号
    (r'(?<!\d)1[3-9]\d-\d{4}-\d{4}(?!\d)', '中国大陆手机号(横线分隔)'),
    # 带空格分隔的手机号
    (r'(?<!\d)1[3-9]\d\s\d{4}\s\d{4}(?!\d)', '中国大陆手机号(空格分隔)'),
    # 带国际区号的手机号
    (r'\+?86\s*1[3-9]\d{9}(?!\d)', '中国大陆手机号(带国际区号)'),
    # 国际区号带横线
    (r'\+?86-1[3-9]\d-\d{4}-\d{4}', '中国大陆手机号(国际区号+横线)'),
]

# 要排除的目录
EXCLUDE_DIRS = {
    'node_modules',
    '.git',
    'dist',
    'build',
    '.husky',
    '__pycache__',
    '.vscode',
    'iframe',  # 通常包含第三方库
}

# 要搜索的文件扩展名
INCLUDE_EXTENSIONS = {
    '.ts', '.js', '.json', '.md', '.txt', '.html', '.css', '.vue', '.jsx', '.tsx',
}

# 要排除的文件
EXCLUDE_FILES = {
    'package-lock.json',
    'bun.lock',
    'yarn.lock',
    'pnpm-lock.yaml',
}


def should_search_file(file_path: Path) -> bool:
    """判断是否应该搜索该文件"""
    # 排除特定文件
    if file_path.name in EXCLUDE_FILES:
        return False
    
    # 只搜索特定扩展名的文件
    if file_path.suffix.lower() not in INCLUDE_EXTENSIONS:
        return False
    
    return True


def search_phone_in_file(file_path: Path) -> List[Tuple[int, str, str, str]]:
    """
    在文件中搜索手机号码
    返回: [(行号, 行内容, 匹配的手机号, 手机号类型), ...]
    """
    results = []
    
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            for line_num, line in enumerate(f, 1):
                for pattern, phone_type in PHONE_PATTERNS:
                    matches = re.finditer(pattern, line)
                    for match in matches:
                        phone = match.group()
                        results.append((line_num, line.strip(), phone, phone_type))
    except Exception as e:
        print(f"  [警告] 无法读取文件 {file_path}: {e}")
    
    return results


def search_directory(root_dir: Path) -> dict:
    """搜索目录中的所有文件"""
    all_results = {}
    
    for file_path in root_dir.rglob('*'):
        # 跳过排除的目录
        if any(excluded in file_path.parts for excluded in EXCLUDE_DIRS):
            continue
        
        # 检查是否应该搜索该文件
        if not file_path.is_file() or not should_search_file(file_path):
            continue
        
        results = search_phone_in_file(file_path)
        if results:
            # 使用相对路径
            rel_path = file_path.relative_to(root_dir)
            all_results[str(rel_path)] = results
    
    return all_results


def print_results(results: dict, root_dir: Path):
    """打印搜索结果"""
    if not results:
        print("\n✅ 未找到手机号码")
        return
    
    print(f"\n⚠️  发现 {len(results)} 个文件包含手机号码:\n")
    print("=" * 80)
    
    total_matches = 0
    for file_path, matches in results.items():
        total_matches += len(matches)
        print(f"\n📁 文件: {file_path}")
        print("-" * 60)
        
        for line_num, line, phone, phone_type in matches:
            # 高亮显示手机号
            highlighted_line = line.replace(phone, f"【{phone}】")
            print(f"  行 {line_num}: {highlighted_line}")
            print(f"       类型: {phone_type}")
            print()
    
    print("=" * 80)
    print(f"\n📊 统计: 共发现 {total_matches} 处手机号码")


def main():
    parser = argparse.ArgumentParser(description='搜索仓库中的手机号码')
    parser.add_argument('--dir', '-d', type=str, default='.',
                        help='要搜索的目录路径（默认为当前目录）')
    parser.add_argument('--output', '-o', type=str, default=None,
                        help='输出结果到文件')
    args = parser.parse_args()
    
    root_dir = Path(args.dir).resolve()
    print(f"🔍 正在搜索目录: {root_dir}")
    print(f"   排除目录: {', '.join(EXCLUDE_DIRS)}")
    print(f"   搜索文件类型: {', '.join(INCLUDE_EXTENSIONS)}")
    
    results = search_directory(root_dir)
    print_results(results, root_dir)
    
    # 如果指定了输出文件
    if args.output:
        output_path = Path(args.output)
        with open(output_path, 'w', encoding='utf-8') as f:
            for file_path, matches in results.items():
                for line_num, line, phone, phone_type in matches:
                    f.write(f"{file_path}:{line_num}: {phone} ({phone_type})\n")
        print(f"\n💾 结果已保存到: {output_path}")


if __name__ == '__main__':
    main()