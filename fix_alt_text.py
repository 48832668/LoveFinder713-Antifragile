#!/usr/bin/env python3
"""
修复 README.md 中的图片 alt text
将 ![1773159813171](images/README/LF713_wizard007.png) 
改为 ![LF713_wizard007](images/README/LF713_wizard007.png)
"""

import re
from pathlib import Path


def main():
    project_root = Path(__file__).parent
    readme_path = project_root / "README.md"
    readme_en_path = project_root / "README.en.md"
    
    # 处理 README.md
    fix_readme(readme_path)
    
    # 处理 README.en.md（如果存在）
    if readme_en_path.exists():
        fix_readme(readme_en_path)
    
    print("\n✅ 修复完成！")


def fix_readme(readme_path: Path):
    """修复 README 中的图片 alt text"""
    content = readme_path.read_text(encoding='utf-8')
    
    # 匹配格式: ![纯数字](images/README/LF713_wizardXXX.扩展名)
    pattern = r'!\[(\d+)\]\((images/README/(LF713_wizard\d+\.\w+))\)'
    
    def replace_alt(match):
        old_alt = match.group(1)  # 原来的数字 alt
        path = match.group(2)      # 完整路径
        filename = match.group(3)  # 文件名（含扩展名）
        new_alt = filename.rsplit('.', 1)[0]  # 去掉扩展名作为新 alt
        return f'![{new_alt}]({path})'
    
    new_content = re.sub(pattern, replace_alt, content)
    
    if new_content != content:
        readme_path.write_text(new_content, encoding='utf-8')
        print(f"✅ 已更新: {readme_path.name}")
    else:
        print(f"⏭️ 无需更新: {readme_path.name}")


if __name__ == "__main__":
    main()