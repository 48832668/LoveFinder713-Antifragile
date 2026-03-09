# 按行读取文件
$lines = Get-Content 'D:\Debug\LoveFinder713-ElecAntifragile\iframe\settings.html' -Encoding UTF8

# 找到包含 Toast 的行
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "Toast") {
        Write-Host "Line $i : $($lines[$i])"
        if ($i -gt 0) {
            Write-Host "Line $($i-1) : $($lines[$i-1])"
        }
        if ($i -gt 1) {
            Write-Host "Line $($i-2) : $($lines[$i-2])"
        }
        break
    }
}
