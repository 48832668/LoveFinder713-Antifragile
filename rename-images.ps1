$readmePath = 'F:\Debug\LoveFinder713-ElecAntifragile\README.md'
$imagesDir = 'F:\Debug\LoveFinder713-ElecAntifragile\images\README'

# 读取README内容
$content = Get-Content $readmePath -Raw

# 获取所有图片引用（按README中出现顺序）
$pattern = 'images/README/(\d+)\.png'
$regexMatches = [regex]::Matches($content, $pattern)

$counter = 1
$renameMap = @{}

foreach ($match in $regexMatches) {
    $oldName = $match.Groups[1].Value
    if (-not $renameMap.ContainsKey($oldName)) {
        $newName = 'img-{0:D3}' -f $counter
        $renameMap[$oldName] = $newName
        $counter++
    }
}

Write-Host "重命名映射:"
$renameMap.GetEnumerator() | Sort-Object Value | ForEach-Object { Write-Host "$($_.Key) -> $($_.Value)" }
Write-Host "总共: $($renameMap.Count) 个文件需要重命名"

# 重命名文件
foreach ($entry in $renameMap.GetEnumerator()) {
    $oldPath = Join-Path $imagesDir "$($entry.Key).png"
    $newPath = Join-Path $imagesDir "$($entry.Value).png"
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName "$($entry.Value).png" -Force
        Write-Host "已重命名: $($entry.Key).png -> $($entry.Value).png"
    } else {
        Write-Host "文件不存在: $oldPath"
    }
}

# 更新README.md中的引用
$newContent = $content
foreach ($entry in $renameMap.GetEnumerator()) {
    $oldRef = "images/README/$($entry.Key).png"
    $newRef = "images/README/$($entry.Value).png"
    $newContent = $newContent -replace [regex]::Escape($oldRef), $newRef
}

Set-Content -Path $readmePath -Value $newContent -NoNewline
Write-Host "`nREADME.md 已更新完成!"