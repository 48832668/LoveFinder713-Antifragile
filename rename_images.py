#!/usr/bin/env python3
"""
重命名 images/README 目录下的图片文件
将类似手机号的文件名（如 1773159437929.png）重命名为 LF713_wizardXXX 格式
同时更新 README.md 中的引用
"""

import os
import re
from pathlib import Path


def main():
    # 项目根目录
    project_root = Path(__file__).parent
    
    # 图片目录
    images_dir = project_root / "images" / "README"
    
    # README 文件路径
    readme_path = project_root / "README.md"
    readme_en_path = project_root / "README.en.md"
    
    # 获取所有图片文件（排除 logo.png）
    image_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'}
    image_files = []
    
    for f in images_dir.iterdir():
        if f.is_file() and f.suffix.lower() in image_extensions:
            # 检查文件名是否为纯数字（类似手机号）
            if f.stem.isdigit():
                image_files.append(f)
    
    # 按文件名数字排序
    image_files.sort(key=lambda x: int(x.stem))
    
    print(f"找到 {len(image_files)} 个需要重命名的图片文件")
    
    # 创建重命名映射
    rename_map = {}  # 旧名 -> 新名
    for i, old_path in enumerate(image_files, start=1):
        new_name = f"LF713_wizard{i:03d}{old_path.suffix}"
        new_path = images_dir / new_name
        rename_map[old_path.name] = new_name
        print(f"  {old_path.name} -> {new_name}")
    
    # 确认执行
    confirm = input("\n是否执行重命名操作？(y/n): ").strip().lower()
    if confirm != 'y':
        print("已取消操作")
        return
    
    # 先重命名到临时名称（避免命名冲突）
    print("\n第一步：重命名到临时文件名...")
    temp_map = {}  # 旧路径 -> 临时路径
    for old_path in image_files:
        temp_name = f"_temp_{old_path.stem}{old_path.suffix}"
        temp_path = images_dir / temp_name
        old_path.rename(temp_path)
        temp_map[old_path] = temp_path
    
    # 再从临时名称重命名到最终名称
    print("第二步：重命名到最终文件名...")
    for old_path, temp_path in temp_map.items():
        new_name = rename_map[old_path.name]
        new_path = images_dir / new_name
        temp_path.rename(new_path)
        print(f"  完成: {new_name}")
    
    # 更新 README.md 中的引用
    print("\n更新 README.md 中的引用...")
    update_readme(readme_path, rename_map)
    
    # 检查是否存在英文 README
    if readme_en_path.exists():
        print("更新 README.en.md 中的引用...")
        update_readme(readme_en_path, rename_map)
    
    print("\n✅ 所有操作完成！")


def update_readme(readme_path: Path, rename_map: dict):
    """更新 README 文件中的图片引用"""
    content = readme_path.read_text(encoding='utf-8')
    
    # 替换所有图片引用
    for old_name, new_name in rename_map.items():
        # 匹配各种可能的引用格式
        # ![alt](images/README/old_name.png)
        # ![](images/README/old_name.png)
        content = content.replace(f"images/README/{old_name}", f"images/README/{new_name}")
    
    readme_path.write_text(content, encoding='utf-8')
    print(f"  已更新: {readme_path.name}")


if __name__ == "__main__":
    main()