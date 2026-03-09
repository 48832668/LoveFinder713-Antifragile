# 按行读取文件
$lines = Get-Content 'D:\Debug\LoveFinder713-ElecAntifragile\iframe\settings.html' -Encoding UTF8

# 找到包含 Toast 的行（使用不同的搜索模式）
$toastLineIdx = -1
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "Toast") {
        $toastLineIdx = $i
        Write-Host "Found at line $i : $($lines[$i])"
        break
    }
}

Write-Host "Toast line found at index: $toastLineIdx"

if ($toastLineIdx -ge 0) {
    # 构建要插入的模态框 HTML 行
    $modalLines = @()
    $modalLines += ""
    $modalLines += "	<!-- 配置导入导出模态框 -->"
    $modalLines += "	<div class=`"modal fade`" id=`"exportModal`" tabindex=`"-1`">"
    $modalLines += "		<div class=`"modal-dialog modal-lg`">"
    $modalLines += "			<div class=`"modal-content`">"
    $modalLines += "				<div class=`"modal-header py-2`">"
    $modalLines += "					<h6 class=`"modal-title`">📋 配置导入/导出</h6>"
    $modalLines += "					<button type=`"button`" class=`"btn-close`" data-bs-dismiss=`"modal`"></button>"
    $modalLines += "				</div>"
    $modalLines += "				<div class=`"modal-body`">"
    $modalLines += "					<div class=`"mb-3`">"
    $modalLines += "						<label class=`"form-label fw-bold`">📤 导出配置</label>"
    $modalLines += "						<p class=`"small text-muted mb-2`">将当前配置导出为 JSON 文件，方便备份或分享</p>"
    $modalLines += "						<button type=`"button`" class=`"btn btn-primary btn-sm`" id=`"exportBtn`">"
    $modalLines += "							⬇️ 导出配置文件"
    $modalLines += "						</button>"
    $modalLines += "					</div>"
    $modalLines += "					<hr>"
    $modalLines += "					<div class=`"mb-3`">"
    $modalLines += "						<label class=`"form-label fw-bold`">📥 导入配置</label>"
    $modalLines += "						<p class=`"small text-muted mb-2`">从 JSON 文件导入配置（将覆盖当前配置）</p>"
    $modalLines += "						<input type=`"file`" class=`"form-control form-control-sm mb-2`" id=`"importFile`" accept=`".json`">"
    $modalLines += "						<button type=`"button`" class=`"btn btn-warning btn-sm`" id=`"importBtn`">"
    $modalLines += "							⬆️ 导入配置文件"
    $modalLines += "						</button>"
    $modalLines += "					</div>"
    $modalLines += "				</div>"
    $modalLines += "			</div>"
    $modalLines += "		</div>"
    $modalLines += "	</div>"
    $modalLines += "	</div>"
    
    # 在 Toast 容器前插入模态框 HTML
    $newLines = @()
    for ($i = 0; $i -lt $toastLineIdx; $i++) {
        $newLines += $lines[$i]
    }
    for ($i = 0; $i -lt $modalLines.Count; $i++) {
        $newLines += $modalLines[$i]
    }
    for ($i = $toastLineIdx; $i -lt $lines.Count; $i++) {
        $newLines += $lines[$i]
    }
    
    # 保存文件
    $newLines | Set-Content 'D:\Debug\LoveFinder713-ElecAntifragile\iframe\settings.html' -Encoding UTF8
    Write-Host "Done!"
    
    # 验证
    $verifyLines = Get-Content 'D:\Debug\LoveFinder713-ElecAntifragile\iframe\settings.html' -Encoding UTF8
    $hasModal = $false
    foreach ($line in $verifyLines) {
        if ($line -match "exportModal") {
            $hasModal = $true
            break
        }
    }
    if ($hasModal) {
        Write-Host "Modal HTML inserted successfully!"
    } else {
        Write-Host "Modal HTML NOT found!"
    }
} else {
    Write-Host "Toast line not found!"
}
