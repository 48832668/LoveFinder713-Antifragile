# EDA API 全量文档（Markdown 详细版）

- 生成说明：由 Lion 编写脚本自动抓取。
- 生成时间：2026-02-23T20:02:51
- 文档总数：1889 (root=1, one-part=245, member=1643)
- 覆盖差异：missing=0，extra=0，orphanMemberParent=0

## 总览

| 类别 | 数量 | 方法/成员数 |
|---|---:|---:|
| 类 | 113 | 1212 |
| 枚举 | 46 | 0 |
| 接口 | 66 | 346 |
| 图元类(类子集) | 52 | 793 |
| 类型别名 | 19 | 0 |
| 变量 | 1 | 85 |

## 系统

- 类：25（方法 136）；枚举：13；接口：11（成员 42）；图元类：0（方法 0）；类型别名：1；变量：1

### 类

#### SYS_ClientUrl

- 类签名：export declare class SYS_ClientUrl
- 类描述：系统 / 外部请求类
- 类备注：

##### request

- 方法签名：request (url: string, method ?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' , data ?: string | Blob | FormData | URLSearchParams, options ?: { headers?: { [header: string]: any; }; integrity ?: string; }, succeedCallFn ?: ( data : Response ) => void | Promise <void> ): Promise < Response > ;
- 方法修饰符：
- 方法描述：发起即时请求

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| url | string | 请求地址 |
| method | 'GET' \| 'POST' \| 'HEAD' \| 'PUT' \| 'DELETE' \| 'PATCH' | (Optional) 请求方法 |
| data | string \| Blob \| FormData \| URLSearchParams | (Optional) 请求发送的数据，可以是直接数据或 URLSearchParams 对象，如果 method 为 HEAD 或 GET ，本参数将被忽略 |
| options | { headers?: { [header: string]: any; }; integrity?: string; } | (Optional) 请求参数 |
| succeedCallFn | (data: Response) => void \| Promise<void> | (Optional) 请求成功后回调的函数 |

- 返回值类型：Promise<Response>
- 返回值描述：Fetch 的返回结果

#### SYS_Dialog

- 类签名：export declare class SYS_Dialog
- 类描述：系统 / 对话框类
- 类备注：

##### showConfirmationMessage

- 方法签名：showConfirmationMessage (content: string, title ?: string, mainButtonTitle ?: string, buttonTitle ?: string, callbackFn ?: ( mainButtonClicked : boolean ) => void ): void ;
- 方法修饰符：
- 方法描述：弹出确认窗口

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| content | string | 消息文本，支持使用 \n 换行 |
| title | string | (Optional) 弹出窗口标题 |
| mainButtonTitle | string | (Optional) 主要按钮标题 |
| buttonTitle | string | (Optional) 主要按钮标题 |
| callbackFn | (mainButtonClicked: boolean) => void | (Optional) 回调函数 |

- 返回值类型：void
- 返回值描述：

##### showInformationMessage

- 方法签名：showInformationMessage (content: string, title ?: string, buttonTitle ?: string): void ;
- 方法修饰符：
- 方法描述：弹出消息窗口

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| content | string | 消息文本，支持使用 \n 换行 |
| title | string | (Optional) 弹出窗口标题 |
| buttonTitle | string | (Optional) 按钮标题，为空则不显示按钮 |

- 返回值类型：void
- 返回值描述：

##### showInputDialog

- 方法签名：showInputDialog (beforeContent ?: string, afterContent ?: string, title ?: string, type ?: 'color' | 'date' | 'datetime-local' | 'email' | 'mouth' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week' , value ?: string | number, otherProperty ?: { max?: number; maxlength ?: number; min ?: number; minlength ?: number; multiple ?: boolean; pattern ?: RegExp; placeholder ?: string; readonly ?: boolean; step ?: number; }, callbackFn ?: ( value : any ) => void ): void ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| beforeContent | string | (Optional) 输入框上方文字 |
| afterContent | string | (Optional) 输入框下方文字 |
| title | string | (Optional) 弹出窗口标题 |
| type | 'color' \| 'date' \| 'datetime-local' \| 'email' \| 'mouth' \| 'number' \| 'password' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week' | (Optional) 输入框类型 |
| value | string \| number | (Optional) 输入框默认值 |
| otherProperty | { max?: number; maxlength?: number; min?: number; minlength?: number; multiple?: boolean; pattern?: RegExp; placeholder?: string; readonly?: boolean; step?: number; } | (Optional) 其它参数，可参考 The HTML Input element |
| callbackFn | (value: any) => void | (Optional) 回调函数 |

- 返回值类型：void
- 返回值描述：用户输入的值，始终为 string 类型，除非用户点击了 **取消** 按钮

##### showSelectDialog

- 方法签名：showSelectDialog (options: Array < string > | Array <{ value : string ; displayContent : string ; }>, beforeContent ?: string, afterContent ?: string, title ?: string, defaultOption ?: string, multiple ?: false , callbackFn ?: ( value : string ) => void | Promise <void> ): void ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| options | Array<string> \| Array<{ value: string; displayContent: string; }> | 选项列表，可以为字符串数组或对象数组，在未指定 defaultOption 时，默认值为列表的第一项； 如若为字符串数组，则选项的值和选项的展示内容将保持一致； 如若为对象数组，则 value 表示选项的值， displayContent 表示选项的展示内容 |
| beforeContent | string | (Optional) 选择框上方文字 |
| afterContent | string | (Optional) 选择框下方文字 |
| title | string | (Optional) 选择框标题 |
| defaultOption | string | (Optional) 默认选项，以选项的值作为匹配参数，如若 multiple 参数为 true ，则此处需要传入字符串数组 |
| multiple | false | (Optional) 是否支持多选，默认为单选框 |
| callbackFn | (value: string) => void \| Promise<void> | (Optional) 回调函数 |

- 返回值类型：void
- 返回值描述：用户选择的值，对应传入的 options 中的 value 字段

##### showSelectDialog

- 方法签名：showSelectDialog (options: Array < string > | Array <{ value : string ; displayContent : string ; }>, beforeContent ?: string, afterContent ?: string, title ?: string, defaultOption ?: Array < string > , multiple ?: true , callbackFn ?: ( value : Array < string >) => void | Promise <void> ): void ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| options | Array<string> \| Array<{ value: string; displayContent: string; }> | 选项列表，可以为字符串数组或对象数组，在未指定 defaultOption 时，默认值为列表的第一项； 如若为字符串数组，则选项的值和选项的展示内容将保持一致； 如若为对象数组，则 value 表示选项的值， displayContent 表示选项的展示内容 |
| beforeContent | string | (Optional) 多选框上方文字 |
| afterContent | string | (Optional) 多选框下方文字 |
| title | string | (Optional) 多选框标题 |
| defaultOption | Array<string> | (Optional) 默认选项数组，以选项的值作为匹配参数 |
| multiple | true | (Optional) 是否支持多选 |
| callbackFn | (value: Array<string>) => void \| Promise<void> | (Optional) 回调函数 |

- 返回值类型：void
- 返回值描述：用户选择的值的集合数组，对应传入的 options 中的 value 字段

#### SYS_Environment

- 类签名：export declare class SYS_Environment
- 类描述：系统 / 运行环境类
- 类备注：

##### getEditorCompliedDate

- 方法签名：getEditorCompliedDate (): string;
- 方法修饰符：
- 方法描述：获取编辑器编译日期

参数：

- 无

- 返回值类型：string
- 返回值描述：编辑器编译日期

##### getEditorCurrentVersion

- 方法签名：getEditorCurrentVersion (): string;
- 方法修饰符：
- 方法描述：获取编辑器当前版本

参数：

- 无

- 返回值类型：string
- 返回值描述：编辑器当前版本

##### getUserInfo

- 方法签名：getUserInfo (): { username?: string; nickname ?: string; avatar ?: string; uuid ?: string; customerCode ?: string; };
- 方法修饰符：
- 方法描述：获取用户信息

参数：

- 无

- 返回值类型：{ username?: string; nickname?: string; avatar?: string; uuid?: string; customerCode?: string; }
- 返回值描述：用户信息

##### isClient

- 方法签名：isClient (): boolean;
- 方法修饰符：
- 方法描述：是否处于客户端环境

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否处于客户端环境

##### isEasyEDAProEdition

- 方法签名：isEasyEDAProEdition (): boolean;
- 方法修饰符：
- 方法描述：是否为 EasyEDA Pro 版本

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为 EasyEDA Pro 版本

##### isHalfOfflineMode

- 方法签名：isHalfOfflineMode (): boolean;
- 方法修饰符：
- 方法描述：是否为半离线模式

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为半离线模式

##### isJLCEDAProEdition

- 方法签名：isJLCEDAProEdition (): boolean;
- 方法修饰符：
- 方法描述：是否为 嘉立创EDA 专业版本

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为嘉立创EDA 专业版本

##### isOfflineMode

- 方法签名：isOfflineMode (): boolean;
- 方法修饰符：
- 方法描述：是否为全离线模式

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为全离线模式

##### isOnlineMode

- 方法签名：isOnlineMode (): boolean;
- 方法修饰符：
- 方法描述：是否为在线模式

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为在线模式

##### isProPrivateEdition

- 方法签名：isProPrivateEdition (): boolean;
- 方法修饰符：
- 方法描述：是否为私有化部署版本

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为私有化部署版本

##### isWeb

- 方法签名：isWeb (): boolean;
- 方法修饰符：
- 方法描述：是否处于浏览器环境

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否处于浏览器环境

##### setKeepProjectHasOnlyOneBoard

- 方法签名：setKeepProjectHasOnlyOneBoard (status ?: boolean): Promise <void> ;
- 方法修饰符：
- 方法描述：设置环境：保持工程仅拥有一个板子

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| status | boolean | (Optional) 环境变量状态 |

- 返回值类型：Promise<void>
- 返回值描述：

#### SYS_FileManager

- 类签名：export declare class SYS_FileManager
- 类描述：系统 / 文件管理类
- 类备注：

##### getCbbFileByCbbUuid

- 方法签名：getCbbFileByCbbUuid (cbbUuid: string, libraryUuid ?: string, cbbName ?: string, password ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| cbbName | string | (Optional) |
| password | string | (Optional) 加密密码 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：复用模块文件数据， undefined 表示数据获取失败

##### getDeviceFileByDeviceUuid

- 方法签名：getDeviceFileByDeviceUuid (deviceUuid: string | Array < string > , libraryUuid ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：使用器件 UUID 获取器件文件

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| deviceUuid | string \| Array<string> | 器件 UUID 或器件 UUID 列表 |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取，如若不传入，则为系统库 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：器件文件数据， undefined 表示数据获取失败

##### getDocumentFile

- 方法签名：getDocumentFile (fileName ?: string, password ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：获取文档文件

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| password | string | (Optional) 加密密码 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：文档文件数据， undefined 表示当前未打开文档或数据获取失败

##### getDocumentFootprintSources

- 方法签名：getDocumentFootprintSources (): Promise < Array <{ footprintUuid : string ; documentSource : string ; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<{ footprintUuid: string; documentSource: string; }>>
- 返回值描述：文档封装源码数据，数据获取失败将返回空数组

##### getDocumentSource

- 方法签名：getDocumentSource (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：文档源码数据， undefined 表示当前未打开文档或数据获取失败

##### getFootprintFileByFootprintUuid

- 方法签名：getFootprintFileByFootprintUuid (footprintUuid: string | Array < string > , libraryUuid ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string \| Array<string> | 封装 UUID 或封装 UUID 列表 |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：封装文件数据， undefined 表示数据获取失败

##### getPanelLibraryFileByPanelLibraryUuid

- 方法签名：getPanelLibraryFileByPanelLibraryUuid (panelLibraryUuid: string | Array < string > , libraryUuid ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelLibraryUuid | string \| Array<string> | 面板库 UUID 或面板库 UUID 列表 |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：面板库文件数据， undefined 表示数据获取失败

##### getProjectFile

- 方法签名：getProjectFile (fileName ?: string, password ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：获取工程文件

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| password | string | (Optional) 加密密码 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：工程文件数据， undefined 表示当前未打开工程或数据获取失败

##### getProjectFileByProjectUuid

- 方法签名：getProjectFileByProjectUuid (projectUuid: string, fileName ?: string, password ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：使用工程 UUID 获取工程文件

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectUuid | string | 工程 UUID |
| fileName | string | (Optional) 文件名 |
| password | string | (Optional) 加密密码 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：工程文件数据， undefined 表示当前未打开工程或数据获取失败

##### importProjectByProjectFile

- 方法签名：importProjectByProjectFile (projectFile: File, fileType ?: 'JLCEDA' | 'JLCEDA Pro' | 'EasyEDA' | 'EasyEDA Pro' | 'Allegro' | 'OrCAD' | 'EAGLE' | 'KiCad' | 'PADS' | 'LTspice' , props ?: { importOption?: EImportOptionType; schematicObjectStyle ?: ESchPrimitiveStyle; associateFootprint ?: boolean; associate3DModel ?: boolean; importFootprintNotesLayer ?: boolean; }, saveTo ?: { operation: 'New Project' ; newProjectOwnerTeamUuid: IDMT_TeamItem[ 'uuid' ]; newProjectOwnerFolderUuid ?: IDMT_FolderItem[ 'uuid' ]; newProjectName ?: string; newProjectFriendlyName ?: string; newProjectDescription ?: string; newProjectCollaborationMode ?: EDMT_ProjectCollaborationMode; } | { operation: 'Existing Project' ; existingProjectUuid: IDMT_BriefProjectItem[ 'uuid' ]; }, librariesImportSetting ?: { ownerTeamUuid: IDMT_TeamItem[ 'uuid' ]; createDeviceForSingleSymbol ?: boolean; }): Promise < IDMT_BriefProjectItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectFile | File | 工程文件 |
| fileType | 'JLCEDA' \| 'JLCEDA Pro' \| 'EasyEDA' \| 'EasyEDA Pro' \| 'Allegro' \| 'OrCAD' \| 'EAGLE' \| 'KiCad' \| 'PADS' \| 'LTspice' | (Optional) 文件类型 |
| props | { importOption?: EImportOptionType; schematicObjectStyle?: ESchPrimitiveStyle; associateFootprint?: boolean; associate3DModel?: boolean; importFootprintNotesLayer?: boolean; } | (Optional) 导入参数，参考 EDA 前端 **导入** 窗口内的配置项 |
| saveTo | { operation: 'New Project'; newProjectOwnerTeamUuid: IDMT_TeamItem ['uuid']; newProjectOwnerFolderUuid?: IDMT_FolderItem ['uuid']; newProjectName?: string; newProjectFriendlyName?: string; newProjectDescription?: string; newProjectCollaborationMode?: EDMT_ProjectCollaborationMode ; } \| { operation: 'Existing Project'; existingProjectUuid: IDMT_BriefProjectItem ['uuid']; } | (Optional) 保存到工程参数 |
| librariesImportSetting | { ownerTeamUuid: IDMT_TeamItem ['uuid']; createDeviceForSingleSymbol?: boolean; } | (Optional) |

- 返回值类型：Promise< IDMT_BriefProjectItem | undefined>
- 返回值描述：导入的工程的简略工程属性

##### importProjectByProjectFile

- 方法签名：importProjectByProjectFile (projectFile: File, fileType ?: 'Altium Designer' | 'Protel' , props ?: { importOption?: EImportOptionType; viaSolderMaskExpansion ?: EViaSolderMaskExpansion; boardOutlineSource ?: EBoardOutlineSourceType; schematicObjectStyle ?: ESchPrimitiveStyle; associateFootprint ?: boolean; associate3DModel ?: boolean; importFootprintNotesLayer ?: boolean; }, saveTo ?: { operation: 'New Project' ; newProjectOwnerTeamUuid: IDMT_TeamItem[ 'uuid' ]; newProjectOwnerFolderUuid ?: IDMT_FolderItem[ 'uuid' ]; newProjectName ?: string; newProjectFriendlyName ?: string; newProjectDescription ?: string; newProjectCollaborationMode ?: EDMT_ProjectCollaborationMode; } | { operation: 'Existing Project' ; existingProjectUuid: IDMT_BriefProjectItem[ 'uuid' ]; }, librariesImportSetting ?: { ownerTeamUuid: IDMT_TeamItem[ 'uuid' ]; createDeviceForSingleSymbol ?: boolean; }): Promise < IDMT_BriefProjectItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectFile | File | 工程文件 |
| fileType | 'Altium Designer' \| 'Protel' | (Optional) 文件类型 |
| props | { importOption?: EImportOptionType; viaSolderMaskExpansion?: EViaSolderMaskExpansion; boardOutlineSource?: EBoardOutlineSourceType; schematicObjectStyle?: ESchPrimitiveStyle; associateFootprint?: boolean; associate3DModel?: boolean; importFootprintNotesLayer?: boolean; } | (Optional) 导入参数，参考 EDA 前端 **导入** 窗口内的配置项 |
| saveTo | { operation: 'New Project'; newProjectOwnerTeamUuid: IDMT_TeamItem ['uuid']; newProjectOwnerFolderUuid?: IDMT_FolderItem ['uuid']; newProjectName?: string; newProjectFriendlyName?: string; newProjectDescription?: string; newProjectCollaborationMode?: EDMT_ProjectCollaborationMode ; } \| { operation: 'Existing Project'; existingProjectUuid: IDMT_BriefProjectItem ['uuid']; } | (Optional) 保存到工程参数 |
| librariesImportSetting | { ownerTeamUuid: IDMT_TeamItem ['uuid']; createDeviceForSingleSymbol?: boolean; } | (Optional) |

- 返回值类型：Promise< IDMT_BriefProjectItem | undefined>
- 返回值描述：导入的工程的简略工程属性

##### setDocumentSource

- 方法签名：setDocumentSource (source: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| source | string | 文档源码 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功，如果输入的文档源码格式错误，将返回 false 的结果

#### SYS_FileSystem

- 类签名：export declare class SYS_FileSystem
- 类描述：系统 / 文件系统交互类
- 类备注：

##### deleteFileInFileSystem

- 方法签名：deleteFileInFileSystem (uri: string, force ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uri | string | 文件资源定位符 如若结尾为斜杠 / （Windows 为反斜杠 \ ），则识别为文件夹； 如若结尾非斜杠，则识别为完整文件名，此时 fileName 参数将被忽略 |
| force | boolean | (Optional) 强制删除文件夹（当欲删除的是文件夹且文件夹内有文件时，是否强制删除该文件夹） |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### getDocumentsPath

- 方法签名：getDocumentsPath (): Promise < string > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string>
- 返回值描述：文档目录路径

##### getEdaPath

- 方法签名：getEdaPath (): Promise < string > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string>
- 返回值描述：EDA 文档目录路径

##### getExtensionFile

- 方法签名：getExtensionFile (uri: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：获取扩展内的文件

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uri | string | 文件路径 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：File 格式文件

##### getLibrariesPaths

- 方法签名：getLibrariesPaths (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：库目录路径数组

##### getProjectsPaths

- 方法签名：getProjectsPaths (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：工程目录路径数组

##### listFilesOfFileSystem

- 方法签名：listFilesOfFileSystem (folderPath: string, recursive ?: boolean): Promise < Array < ISYS_FileSystemFileList >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| folderPath | string | 目录路径 |
| recursive | boolean | (Optional) 是否递归获取所有子文件 |

- 返回值类型：Promise<Array< ISYS_FileSystemFileList >>
- 返回值描述：当前目录下的文件列表

##### openReadFileDialog

- 方法签名：openReadFileDialog (filenameExtensions ?: string | Array < string > , multiFiles ?: true ): Promise < Array < File > | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| filenameExtensions | string \| Array<string> | (Optional) 文件扩展名 |
| multiFiles | true | (Optional) 是否允许读取多文件 |

- 返回值类型：Promise<Array<File> | undefined>
- 返回值描述：File 格式文件数组

##### openReadFileDialog

- 方法签名：openReadFileDialog (filenameExtensions ?: string | Array < string > , multiFiles ?: false ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| filenameExtensions | string \| Array<string> | (Optional) 文件扩展名 |
| multiFiles | false | (Optional) 是否允许读取多文件 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：File 格式文件

##### readFileFromFileSystem

- 方法签名：readFileFromFileSystem (uri: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uri | string | 文件资源定位符，需要包含完整的文件名称的绝对路径 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：File 格式文件

##### saveFile

- 方法签名：saveFile (fileData: File | Blob, fileName ?: string): Promise <void> ;
- 方法修饰符：
- 方法描述：保存文件

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileData | File \| Blob | 文件数据 |
| fileName | string | (Optional) 文件名称 |

- 返回值类型：Promise<void>
- 返回值描述：

##### saveFileToFileSystem

- 方法签名：saveFileToFileSystem (uri: string, fileData: File | Blob, fileName ?: string, force ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uri | string | 文件资源定位符 如若结尾为斜杠 / （Windows 为反斜杠 \ ），则识别为文件夹； 如若结尾非斜杠，则识别为完整文件名，此时 fileName 参数将被忽略 |
| fileData | File \| Blob | 文件数据 |
| fileName | string | (Optional) 文件名称 |
| force | boolean | (Optional) 强制写入（文件存在则覆盖文件） |

- 返回值类型：Promise<boolean>
- 返回值描述：写入操作是否成功，如若不允许覆盖但文件已存在将返回 false 的结果

#### SYS_FontManager

- 类签名：export declare class SYS_FontManager
- 类描述：系统 / 字体管理类
- 类备注：

##### addFont

- 方法签名：addFont (fontName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：添加字体到字体列表

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fontName | string | 字体名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：添加操作是否成功

##### deleteFont

- 方法签名：deleteFont (fontName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：删除字体列表内的指定字体

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fontName | string | 字体名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### getFontsList

- 方法签名：getFontsList (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：获取当前已经配置的字体列表

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：字体列表

#### SYS_HeaderMenu

- 类签名：export declare class SYS_HeaderMenu
- 类描述：系统 / 顶部菜单类
- 类备注：

##### insertHeaderMenus

- 方法签名：insertHeaderMenus (headerMenus: ISYS_HeaderMenus): Promise <void> ;
- 方法修饰符：
- 方法描述：导入顶部菜单数据

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| headerMenus | ISYS_HeaderMenus | 顶部菜单数据 |

- 返回值类型：Promise<void>
- 返回值描述：

##### removeHeaderMenus

- 方法签名：removeHeaderMenus (): void ;
- 方法修饰符：
- 方法描述：移除顶部菜单数据

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### replaceHeaderMenus

- 方法签名：replaceHeaderMenus (headerMenus: ISYS_HeaderMenus): Promise <void> ;
- 方法修饰符：
- 方法描述：替换顶部菜单数据

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| headerMenus | ISYS_HeaderMenus | 顶部菜单数据 |

- 返回值类型：Promise<void>
- 返回值描述：

#### SYS_I18n

- 类签名：export declare class SYS_I18n
- 类描述：系统 / 多语言类
- 类备注：

##### getAllSupportedLanguages

- 方法签名：getAllSupportedLanguages (): Array < string > ;
- 方法修饰符：
- 方法描述：查询所有支持的语言

参数：

- 无

- 返回值类型：Array<string>
- 返回值描述：所有支持的语言列表

##### getCurrentLanguage

- 方法签名：getCurrentLanguage (): Promise < string > ;
- 方法修饰符：
- 方法描述：获取当前语言环境

参数：

- 无

- 返回值类型：Promise<string>
- 返回值描述：语言

##### importMultilingual

- 方法签名：importMultilingual (language: string, source: ISYS_LanguageKeyValuePairs): boolean;
- 方法修饰符：
- 方法描述：导入多语言

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| language | string | 语言 |
| source | ISYS_LanguageKeyValuePairs | 欲导入的多语言数据对象 |

- 返回值类型：boolean
- 返回值描述：导入是否成功

##### importMultilingualLanguage

- 方法签名：importMultilingualLanguage (namespace: string, language: string, source: ISYS_LanguageKeyValuePairs): boolean;
- 方法修饰符：
- 方法描述：导入多语言：指定命名空间和语言

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| namespace | string | 命名空间 |
| language | string | 语言 |
| source | ISYS_LanguageKeyValuePairs | 欲导入的多语言数据对象 |

- 返回值类型：boolean
- 返回值描述：导入是否成功

##### importMultilingualNamespace

- 方法签名：importMultilingualNamespace (namespace: string, source: ISYS_MultilingualLanguagesData): boolean;
- 方法修饰符：
- 方法描述：导入多语言：指定命名空间

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| namespace | string | 命名空间 |
| source | ISYS_MultilingualLanguagesData | 欲导入的多语言数据对象 |

- 返回值类型：boolean
- 返回值描述：导入是否成功

##### isLanguageSupported

- 方法签名：isLanguageSupported (language: string): boolean;
- 方法修饰符：
- 方法描述：检查语言是否受支持

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| language | string | 语言 |

- 返回值类型：boolean
- 返回值描述：是否受支持

##### text

- 方法签名：text(tag, namespace, language, args)
- 方法修饰符：
- 方法描述：输出语言文本

参数：

- 无

- 返回值类型：
- 返回值描述：

#### SYS_IFrame

- 类签名：export declare class SYS_IFrame
- 类描述：系统 / 内联框架窗口类
- 类备注：

##### closeIFrame

- 方法签名：closeIFrame (id ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | (Optional) 内联框架窗口 ID，如若传入 undefined ，将关闭由本扩展打开的所有内联框架窗口 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### hideIFrame

- 方法签名：hideIFrame (id ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | (Optional) 内联框架窗口 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### openIFrame

- 方法签名：openIFrame (htmlFileName: string, width ?: number, height ?: number, id ?: string, props ?: { maximizeButton?: boolean; minimizeButton ?: boolean; buttonCallbackFn ?: ( button : 'close' | 'minimize' | 'maximize' ) => void ; grayscaleMask ?: boolean; }): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| htmlFileName | string | 需要加载的 HTML 文件在扩展包内的路径，从扩展根目录起始，例如 /iframe/index.html |
| width | number | (Optional) 内联框架窗口的宽度 |
| height | number | (Optional) 内联框架窗口的高度 |
| id | string | (Optional) 内联框架窗口 ID，用于关闭内联框架窗口 |
| props | { maximizeButton?: boolean; minimizeButton?: boolean; buttonCallbackFn?: (button: 'close' \| 'minimize' \| 'maximize') => void; grayscaleMask?: boolean; } | (Optional) 其它参数 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### showIFrame

- 方法签名：showIFrame (id ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | (Optional) 内联框架窗口 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### SYS_LoadingAndProgressBar

- 类签名：export declare class SYS_LoadingAndProgressBar
- 类描述：系统 / 加载与进度条类
- 类备注：

##### destroyLoading

- 方法签名：destroyLoading (): void ;
- 方法修饰符：
- 方法描述：销毁无进度加载覆盖

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### destroyProgressBar

- 方法签名：destroyProgressBar (): void ;
- 方法修饰符：
- 方法描述：销毁进度条

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### showLoading

- 方法签名：showLoading (): void ;
- 方法修饰符：
- 方法描述：显示无进度加载覆盖

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### showProgressBar

- 方法签名：showProgressBar (progress ?: number, title ?: string): void ;
- 方法修饰符：
- 方法描述：显示进度条或设置进度条进度

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| progress | number | (Optional) 进度值，取值范围 0-100 |
| title | string | (Optional) 进度条标题 |

- 返回值类型：void
- 返回值描述：

#### SYS_Log

- 类签名：export declare class SYS_Log
- 类描述：系统 / 日志类
- 类备注：

##### add

- 方法签名：add (message: string, type ?: ESYS_LogType): void ;
- 方法修饰符：
- 方法描述：添加日志条目

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| message | string | 日志内容 |
| type | ESYS_LogType | (Optional) 日志类型 |

- 返回值类型：void
- 返回值描述：

##### clear

- 方法签名：clear (): void ;
- 方法修饰符：
- 方法描述：清空日志

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### export

- 方法签名：export (types ?: ESYS_LogType | Array < ESYS_LogType > ): void ;
- 方法修饰符：
- 方法描述：导出日志

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| types | ESYS_LogType \| Array< ESYS_LogType > | (Optional) 日志类型 |

- 返回值类型：void
- 返回值描述：

##### find

- 方法签名：find (message: string | Array < string | { text: string; attr ?: { id?: string; path ?: string; sheet ?: string; pcbid ?: string; type ?: string; }; } > , types ?: ESYS_LogType | Array < ESYS_LogType > ): Promise < Array < ISYS_LogLine >> ;
- 方法修饰符：
- 方法描述：查找条目

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| message | string \| Array<string \| { text: string; attr?: { id?: string; path?: string; sheet?: string; pcbid?: string; type?: string; }; }> | 查找内容 |
| types | ESYS_LogType \| Array< ESYS_LogType > | (Optional) 日志类型数组，可以在指定的日志类型内查找 |

- 返回值类型：Promise<Array< ISYS_LogLine >>
- 返回值描述：符合查找条件的日志条目数组

##### sort

- 方法签名：sort (types ?: ESYS_LogType | Array < ESYS_LogType > ): Promise < Array < ISYS_LogLine >> ;
- 方法修饰符：
- 方法描述：筛选并获取日志条目

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| types | ESYS_LogType \| Array< ESYS_LogType > | (Optional) 日志类型数组，可以同时指定多种日志类型，如若不指定则为全部类型 |

- 返回值类型：Promise<Array< ISYS_LogLine >>
- 返回值描述：符合筛选条件的日志条目数组

#### SYS_Message

- 类签名：export declare class SYS_Message
- 类描述：系统 / 消息通知类
- 类备注：

##### removeFollowMouseTip

- 方法签名：removeFollowMouseTip (tip ?: string): Promise <void> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tip | string | (Optional) 提示内容，如若传入，则仅当当前提示为指定内容时才移除 |

- 返回值类型：Promise<void>
- 返回值描述：

##### showFollowMouseTip

- 方法签名：showFollowMouseTip (tip: string, msTimeout ?: number): Promise <void> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tip | string | 提示内容 |
| msTimeout | number | (Optional) 展示时间，以毫秒（ms）为单位，如若不传入则持续展示，直到调用 removeFollowMouseTip 或被其它提示覆盖 |

- 返回值类型：Promise<void>
- 返回值描述：

##### showToastMessage

- 方法签名：showToastMessage (message: string, messageType ?: ESYS_ToastMessageType, timer ?: number, bottomPanel ?: ESYS_BottomPanelTab, buttonTitle ?: string, buttonCallbackFn ?: string): void ;
- 方法修饰符：
- 方法描述：显示吐司消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| message | string | 消息内容 |
| messageType | ESYS_ToastMessageType | (Optional) 消息类型 |
| timer | number | (Optional) 自动关闭倒计时秒数， 0 为不自动关闭 |
| bottomPanel | ESYS_BottomPanelTab | (Optional) 展开底部信息面板 |
| buttonTitle | string | (Optional) 回调按钮标题 |
| buttonCallbackFn | string | (Optional) 回调函数内容，字符串形式，会被自动解析并执行 |

- 返回值类型：void
- 返回值描述：

#### SYS_MessageBox

- 类签名：export declare class SYS_MessageBox
- 类描述：系统 / 消息框类
- 类备注：

##### showConfirmationMessage

- 方法签名：showConfirmationMessage (content: string, title ?: string, mainButtonTitle ?: string, buttonTitle ?: string, callbackFn ?: ( mainButtonClicked : boolean ) => void ): void ;
- 方法修饰符：
- 方法描述：Warning: This API is now obsolete. 请使用 SYS_Dialog.showConfirmationMessage() 替代

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| content | string | 消息文本，支持使用 \n 换行 |
| title | string | (Optional) 确认框标题 |
| mainButtonTitle | string | (Optional) 主要按钮标题 |
| buttonTitle | string | (Optional) 主要按钮标题 |
| callbackFn | (mainButtonClicked: boolean) => void | (Optional) 回调函数，如需调用扩展内的函数，请在函数名前加上扩展的唯一 ID，以西文句号 . 分隔 |

- 返回值类型：void
- 返回值描述：

##### showInformationMessage

- 方法签名：showInformationMessage (content: string, title ?: string, buttonTitle ?: string): void ;
- 方法修饰符：
- 方法描述：Warning: This API is now obsolete. 请使用 SYS_Dialog.showInformationMessage() 替代

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| content | string | 消息文本，支持使用 \n 换行 |
| title | string | (Optional) 消息框标题 |
| buttonTitle | string | (Optional) 按钮标题，为空则不显示按钮 |

- 返回值类型：void
- 返回值描述：

#### SYS_MessageBus

- 类签名：export declare class SYS_MessageBus
- 类描述：系统 / 消息总线类
- 类备注：

##### createPrivateMessageBus

- 方法签名：createPrivateMessageBus (): void ;
- 方法修饰符：
- 方法描述：创建私有消息总线

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### publish

- 方法签名：publish (topic: string, message: any): void ;
- 方法修饰符：
- 方法描述：私有消息总线：发布消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| message | any | 消息 |

- 返回值类型：void
- 返回值描述：

##### publishPublic

- 方法签名：publishPublic (topic: string, message: any): void ;
- 方法修饰符：
- 方法描述：公共消息总线：发布消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| message | any | 消息 |

- 返回值类型：void
- 返回值描述：

##### pull

- 方法签名：pull (topic: string, callbackFn: ( message : any ) => void ): ISYS_MessageBusTask;
- 方法修饰符：
- 方法描述：私有消息总线：拉消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (message: any) => void | 拉到消息后的回调 |

- 返回值类型：ISYS_MessageBusTask
- 返回值描述：消息总线任务

##### pullAsync

- 方法签名：pullAsync (topic: string): Promise < any > ;
- 方法修饰符：
- 方法描述：私有消息总线：拉消息 Promise 版本

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |

- 返回值类型：Promise<any>
- 返回值描述：拉取到的消息

##### pullAsyncPublic

- 方法签名：pullAsyncPublic (topic: string): Promise < any > ;
- 方法修饰符：
- 方法描述：公共消息总线：拉消息 Promise 版本

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |

- 返回值类型：Promise<any>
- 返回值描述：拉取到的消息

##### pullPublic

- 方法签名：pullPublic (topic: string, callbackFn: ( message : any ) => void ): ISYS_MessageBusTask;
- 方法修饰符：
- 方法描述：公共消息总线：拉消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (message: any) => void | 拉到消息后的回调 |

- 返回值类型：ISYS_MessageBusTask
- 返回值描述：消息总线任务

##### push

- 方法签名：push (topic: string, message: any): void ;
- 方法修饰符：
- 方法描述：私有消息总线：推消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| message | any | 消息 |

- 返回值类型：void
- 返回值描述：

##### pushPublic

- 方法签名：pushPublic (topic: string, message: any): void ;
- 方法修饰符：
- 方法描述：公共消息总线：推消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| message | any | 消息 |

- 返回值类型：void
- 返回值描述：

##### removePrivateMessageBus

- 方法签名：removePrivateMessageBus (): void ;
- 方法修饰符：
- 方法描述：移除私有消息总线

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### rpcCall

- 方法签名：rpcCall (topic: string, message ?: any, timeout ?: number): Promise < any > ;
- 方法修饰符：
- 方法描述：私有消息总线：调用 RPC 服务

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| message | any | (Optional) 消息 |
| timeout | number | (Optional) 超时 |

- 返回值类型：Promise<any>
- 返回值描述：RPC 服务返回

##### rpcCallPublic

- 方法签名：rpcCallPublic (topic: string, message ?: any, timeout ?: number): Promise < any > ;
- 方法修饰符：
- 方法描述：公共消息总线：调用 RPC 服务

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| message | any | (Optional) 消息 |
| timeout | number | (Optional) 超时 |

- 返回值类型：Promise<any>
- 返回值描述：RPC 服务返回

##### rpcService

- 方法签名：rpcService (topic: string, callbackFn: ( ... args : Array < any >) => any | Promise < any > ): void ;
- 方法修饰符：
- 方法描述：私有消息总线：注册 RPC 服务

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (...args: Array<any>) => any \| Promise<any> | 接收到消息后的回调 |

- 返回值类型：void
- 返回值描述：

##### rpcServicePublic

- 方法签名：rpcServicePublic (topic: string, callbackFn: ( ... args : Array < any >) => any | Promise < any > ): void ;
- 方法修饰符：
- 方法描述：公共消息总线：注册 RPC 服务

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (...args: Array<any>) => any \| Promise<any> | 接收到消息后的回调 |

- 返回值类型：void
- 返回值描述：

##### subscribe

- 方法签名：subscribe (topic: string, callbackFn: ( message : any ) => void ): ISYS_MessageBusTask;
- 方法修饰符：
- 方法描述：私有消息总线：订阅消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (message: any) => void | 接收到消息后的回调 |

- 返回值类型：ISYS_MessageBusTask
- 返回值描述：消息总线任务

##### subscribeOnce

- 方法签名：subscribeOnce (topic: string, callbackFn: ( message : any ) => void ): ISYS_MessageBusTask;
- 方法修饰符：
- 方法描述：私有消息总线：订阅单次消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (message: any) => void | 接收到消息后的回调 |

- 返回值类型：ISYS_MessageBusTask
- 返回值描述：消息总线任务

##### subscribeOncePublic

- 方法签名：subscribeOncePublic (topic: string, callbackFn: ( message : any ) => void ): ISYS_MessageBusTask;
- 方法修饰符：
- 方法描述：公共消息总线：订阅单次消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (message: any) => void | 接收到消息后的回调 |

- 返回值类型：ISYS_MessageBusTask
- 返回值描述：消息总线任务

##### subscribePublic

- 方法签名：subscribePublic (topic: string, callbackFn: ( message : any ) => void ): ISYS_MessageBusTask;
- 方法修饰符：
- 方法描述：公共消息总线：订阅消息

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topic | string | 主题 |
| callbackFn | (message: any) => void | 接收到消息后的回调 |

- 返回值类型：ISYS_MessageBusTask
- 返回值描述：消息总线任务

#### SYS_PanelControl

- 类签名：export declare class SYS_PanelControl
- 类描述：系统 / 面板控制类
- 类备注：

##### closeBottomPanel

- 方法签名：closeBottomPanel (): void ;
- 方法修饰符：
- 方法描述：关闭底部面板

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### closeLeftPanel

- 方法签名：closeLeftPanel (): void ;
- 方法修饰符：
- 方法描述：关闭左侧面板

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### closeRightPanel

- 方法签名：closeRightPanel (): void ;
- 方法修饰符：
- 方法描述：关闭右侧面板

参数：

- 无

- 返回值类型：void
- 返回值描述：

##### isBottomPanelLocked

- 方法签名：isBottomPanelLocked (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：查询底部面板是否已锁定

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：是否已锁定

##### isLeftPanelLocked

- 方法签名：isLeftPanelLocked (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：查询左侧面板是否已锁定

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：是否已锁定

##### isRightPanelLocked

- 方法签名：isRightPanelLocked (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：查询右侧面板是否已锁定

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：是否已锁定

##### openBottomPanel

- 方法签名：openBottomPanel (tab ?: ESYS_BottomPanelTab): void ;
- 方法修饰符：
- 方法描述：打开底部面板

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tab | ESYS_BottomPanelTab | (Optional) 标签页，如若不指定则不切换标签页 |

- 返回值类型：void
- 返回值描述：

##### openLeftPanel

- 方法签名：openLeftPanel (tab ?: ESYS_LeftPanelTab): void ;
- 方法修饰符：
- 方法描述：打开左侧面板

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tab | ESYS_LeftPanelTab | (Optional) 标签页，如若不指定则不切换标签页 |

- 返回值类型：void
- 返回值描述：

##### openRightPanel

- 方法签名：openRightPanel (tab ?: ESYS_RightPanelTab): void ;
- 方法修饰符：
- 方法描述：打开右侧面板

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tab | ESYS_RightPanelTab | (Optional) 标签页，如若不指定则不切换标签页 |

- 返回值类型：void
- 返回值描述：

##### toggleBottomPanelLockState

- 方法签名：toggleBottomPanelLockState (state ?: boolean): void ;
- 方法修饰符：
- 方法描述：切换底部面板锁定状态

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| state | boolean | (Optional) 是否锁定，如若不指定则反置当前状态 |

- 返回值类型：void
- 返回值描述：

##### toggleLeftPanelLockState

- 方法签名：toggleLeftPanelLockState (state ?: boolean): void ;
- 方法修饰符：
- 方法描述：切换左侧面板锁定状态

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| state | boolean | (Optional) 是否锁定，如若不指定则反置当前状态 |

- 返回值类型：void
- 返回值描述：

##### toggleRightPanelLockState

- 方法签名：toggleRightPanelLockState (state ?: boolean): void ;
- 方法修饰符：
- 方法描述：切换右侧面板锁定状态

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| state | boolean | (Optional) 是否锁定，如若不指定则反置当前状态 |

- 返回值类型：void
- 返回值描述：

#### SYS_RightClickMenu

- 类签名：export declare class SYS_RightClickMenu
- 类描述：系统 / 右键菜单类
- 类备注：

- 无方法

#### SYS_Setting

- 类签名：export declare class SYS_Setting
- 类描述：系统 / 设置类
- 类备注：

##### restoreDefault

- 方法签名：restoreDefault (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### SYS_ShortcutKey

- 类签名：export declare class SYS_ShortcutKey
- 类描述：系统 / 快捷键类
- 类备注：

##### getShortcutKeys

- 方法签名：getShortcutKeys (includeSystem ?: boolean): Promise < Array <{ shortcutKey : TSYS_ShortcutKeys ; title : string ; documentType : Array < ESYS_ShortcutKeyEffectiveEditorDocumentType >; scene : Array < ESYS_ShortcutKeyEffectiveEditorScene >; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| includeSystem | boolean | (Optional) 是否包含系统快捷键 |

- 返回值类型：Promise<Array<{ shortcutKey: TSYS_ShortcutKeys ; title: string; documentType: Array< ESYS_ShortcutKeyEffectiveEditorDocumentType >; scene: Array< ESYS_ShortcutKeyEffectiveEditorScene >; }>>
- 返回值描述：快捷键列表

##### registerShortcutKey

- 方法签名：registerShortcutKey (shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: ( shortcutKey : TSYS_ShortcutKeys ) => void | Promise <void> , documentType ?: Array < ESYS_ShortcutKeyEffectiveEditorDocumentType > , scene ?: Array < ESYS_ShortcutKeyEffectiveEditorScene > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| shortcutKey | TSYS_ShortcutKeys | 快捷键，数组中包含多个元素则解析为组合快捷键，将按规则排序后存入缓存 |
| title | string | 快捷键标题，快捷键的友好名称 |
| callbackFn | (shortcutKey: TSYS_ShortcutKeys ) => void \| Promise<void> | 回调函数 |
| documentType | Array< ESYS_ShortcutKeyEffectiveEditorDocumentType > | (Optional) |
| scene | Array< ESYS_ShortcutKeyEffectiveEditorScene > | (Optional) |

- 返回值类型：Promise<boolean>
- 返回值描述：注册操作是否成功

##### unregisterShortcutKey

- 方法签名：unregisterShortcutKey (shortcutKey: TSYS_ShortcutKeys): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| shortcutKey | TSYS_ShortcutKeys | 快捷键，不区分传入的排列顺序，将自动排序并查询匹配的快捷键 |

- 返回值类型：Promise<boolean>
- 返回值描述：反注册操作是否成功

#### SYS_Storage

- 类签名：export declare class SYS_Storage
- 类描述：系统 / 存储类
- 类备注：

##### clearExtensionAllUserConfigs

- 方法签名：clearExtensionAllUserConfigs (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：清除扩展所有用户配置

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteExtensionUserConfig

- 方法签名：deleteExtensionUserConfig (key: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：删除扩展用户配置

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 配置项 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getExtensionAllUserConfigs

- 方法签名：getExtensionAllUserConfigs (): { [key: string]: any; };
- 方法修饰符：
- 方法描述：获取扩展所有用户配置

参数：

- 无

- 返回值类型：{ [key: string]: any; }
- 返回值描述：扩展所有用户配置信息

##### getExtensionUserConfig

- 方法签名：getExtensionUserConfig (key: string): any | undefined ;
- 方法修饰符：
- 方法描述：获取扩展用户配置

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 配置项 |

- 返回值类型：any | undefined
- 返回值描述：配置项对应的值，不存在将返回 undefined

##### setExtensionAllUserConfigs

- 方法签名：setExtensionAllUserConfigs (configs: { [key: string]: any; }): Promise < boolean > ;
- 方法修饰符：
- 方法描述：设置扩展所有用户配置

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| configs | { [key: string]: any; } | 扩展所有用户配置 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setExtensionUserConfig

- 方法签名：setExtensionUserConfig (key: string, value: any): Promise < boolean > ;
- 方法修饰符：
- 方法描述：设置扩展用户配置

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 配置项 |
| value | any | 值 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### SYS_Timer

- 类签名：export declare class SYS_Timer
- 类描述：系统 / 定时器类
- 类备注：

##### clearIntervalTimer

- 方法签名：clearIntervalTimer (id: string): boolean;
- 方法修饰符：
- 方法描述：清除指定循环定时器

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 定时器 ID |

- 返回值类型：boolean
- 返回值描述：定时器是否清除成功

##### clearTimeoutTimer

- 方法签名：clearTimeoutTimer (id: string): boolean;
- 方法修饰符：
- 方法描述：清除指定单次定时器

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 定时器 ID |

- 返回值类型：boolean
- 返回值描述：定时器是否清除成功

##### setIntervalTimer

- 方法签名：setIntervalTimer (id: string, timeout: number, callFn: ( ... args : any ) => void , ... args: any): boolean;
- 方法修饰符：
- 方法描述：设置循环定时器

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 定时器 ID，用于定位&删除定时器 |
| timeout | number | 定时时间，单位 ms |
| callFn | (...args: any) => void | 定时调用函数 |
| args | any | 传给定时调用函数的参数 |

- 返回值类型：boolean
- 返回值描述：定时器是否设置成功

##### setTimeoutTimer

- 方法签名：setTimeoutTimer (id: string, timeout: number, callFn: ( ... args : any ) => void , ... args: any): boolean;
- 方法修饰符：
- 方法描述：设置单次定时器

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 定时器 ID |
| timeout | number | 定时时间，单位 ms |
| callFn | (...args: any) => void | 定时调用函数 |
| args | any | 传给定时调用函数的参数 |

- 返回值类型：boolean
- 返回值描述：定时器是否设置成功

#### SYS_ToastMessage

- 类签名：export declare class SYS_ToastMessage
- 类描述：系统 / 吐司消息类
- 类备注：

##### showMessage

- 方法签名：showMessage (message: string, messageType ?: ESYS_ToastMessageType, timer ?: number, bottomPanel ?: ESYS_BottomPanelTab, buttonTitle ?: string, buttonCallbackFn ?: string): void ;
- 方法修饰符：
- 方法描述：Warning: This API is now obsolete. 请使用 SYS_Message.showToastMessage() 方法替代

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| message | string | 消息内容 |
| messageType | ESYS_ToastMessageType | (Optional) 消息类型 |
| timer | number | (Optional) 自动关闭倒计时秒数， 0 为不自动关闭 |
| bottomPanel | ESYS_BottomPanelTab | (Optional) 展开底部信息面板 |
| buttonTitle | string | (Optional) 回调按钮标题 |
| buttonCallbackFn | string | (Optional) 回调函数内容，字符串形式，会被自动解析并执行 |

- 返回值类型：void
- 返回值描述：

#### SYS_Tool

- 类签名：export declare class SYS_Tool
- 类描述：系统 / 工具类
- 类备注：

##### netlistComparison

- 方法签名：netlistComparison (netlist1: string | File, netlist2: string | File): Promise < Array <{ type : 'Net' | 'Component' ; object : string ; netlist1Name : Array < string >; netlist2Name : Array < string >; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netlist1 | string \| File | 网表 1，可以为当前工程内的 PCB 和原理图的 UUID、网表的文件数据 |
| netlist2 | string \| File | 网表 2，可以为当前工程内的 PCB 和原理图的 UUID、网表的文件数据 |

- 返回值类型：Promise<Array<{ type: 'Net' | 'Component'; object: string; netlist1Name: Array<string>; netlist2Name: Array<string>; }>>
- 返回值描述：网表对比结果

#### SYS_Unit

- 类签名：export declare class SYS_Unit
- 类描述：系统 / 单位类
- 类备注：

##### getSystemDataUnit

- 方法签名：getSystemDataUnit (): ESYS_Unit. MIL ;
- 方法修饰符：
- 方法描述：获取 API 系统数据单位跨度

参数：

- 无

- 返回值类型：ESYS_Unit.MIL
- 返回值描述：单位

##### inchToMil

- 方法签名：inchToMil (inch: number, numberOfDecimals ?: number): number;
- 方法修饰符：
- 方法描述：单位转换：英寸到密尔

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| inch | number | 输入英寸数 |
| numberOfDecimals | number | (Optional) 保留小数位数，默认为 4 |

- 返回值类型：number
- 返回值描述：输出密尔数

##### inchToMm

- 方法签名：inchToMm (inch: number, numberOfDecimals ?: number): number;
- 方法修饰符：
- 方法描述：单位转换：英寸到毫米

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| inch | number | 输入英寸数 |
| numberOfDecimals | number | (Optional) 保留小数位数，默认为 4 |

- 返回值类型：number
- 返回值描述：输出毫米数

##### milToInch

- 方法签名：milToInch (mil: number, numberOfDecimals ?: number): number;
- 方法修饰符：
- 方法描述：单位转换：密尔到英寸

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mil | number | 输入密尔数 |
| numberOfDecimals | number | (Optional) 保留小数位数，默认为 4 |

- 返回值类型：number
- 返回值描述：输出英寸数

##### milToMm

- 方法签名：milToMm (mil: number, numberOfDecimals ?: number): number;
- 方法修饰符：
- 方法描述：单位转换：密尔到毫米

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mil | number | 输入密尔数 |
| numberOfDecimals | number | (Optional) 保留小数位数，默认为 4 |

- 返回值类型：number
- 返回值描述：输出毫米数

##### mmToInch

- 方法签名：mmToInch (mm: number, numberOfDecimals ?: number): number;
- 方法修饰符：
- 方法描述：单位转换：毫米到英寸

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mm | number | 输入毫米数 |
| numberOfDecimals | number | (Optional) 保留小数位数，默认为 4 |

- 返回值类型：number
- 返回值描述：输出英寸数

##### mmToMil

- 方法签名：mmToMil (mm: number, numberOfDecimals ?: number): number;
- 方法修饰符：
- 方法描述：单位转换：毫米到密尔

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mm | number | 输入毫米数 |
| numberOfDecimals | number | (Optional) 保留小数位数，默认为 4 |

- 返回值类型：number
- 返回值描述：输出密尔数

#### SYS_WebSocket

- 类签名：export declare class SYS_WebSocket
- 类描述：系统 / WebSocket 类
- 类备注：

##### close

- 方法签名：close (id: string, code ?: number, reason ?: string, extensionUuid ?: string): void ;
- 方法修饰符：
- 方法描述：关闭 WebSocket 连接

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 自定义的 WebSocket ID |
| code | number | (Optional) 数字状态码，对应 WebSocket.CloseEvent 内允许的状态码 |
| reason | string | (Optional) 一个人类可读的字符串，解释连接关闭的原因 |
| extensionUuid | string | (Optional) 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID |

- 返回值类型：void
- 返回值描述：

##### register

- 方法签名：register (id: string, serviceUri: string, receiveMessageCallFn ?: ( event : MessageEvent < any >) => void | Promise <void> , connectedCallFn ?: () => void | Promise <void> , protocols ?: string | Array < string > ): void ;
- 方法修饰符：
- 方法描述：注册 WebSocket 连接

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 自定义 WebSocket ID |
| serviceUri | string | WebSocket 服务地址 |
| receiveMessageCallFn | (event: MessageEvent<any>) => void \| Promise<void> | (Optional) 接收到消息时的回调函数 |
| connectedCallFn | () => void \| Promise<void> | (Optional) 连接建立时的回调函数 |
| protocols | string \| Array<string> | (Optional) 子协议 |

- 返回值类型：void
- 返回值描述：

##### send

- 方法签名：send (id: string, data: string | ArrayBuffer | Blob | ArrayBufferView, extensionUuid ?: string): void ;
- 方法修饰符：
- 方法描述：向 WebSocket 服务器发送数据

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 自定义的 WebSocket ID |
| data | string \| ArrayBuffer \| Blob \| ArrayBufferView | 发送的数据 |
| extensionUuid | string | (Optional) 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID |

- 返回值类型：void
- 返回值描述：

#### SYS_Window

- 类签名：export declare class SYS_Window
- 类描述：系统 / 窗口类
- 类备注：

##### addEventListener

- 方法签名：addEventListener (type: ESYS_WindowEventType, listener: ( ev : any ) => any, options ?: { capture?: boolean; once ?: boolean; passive ?: boolean; signal ?: AbortSignal; }): ISYS_WindowEventListenerRemovableObject | undefined ;
- 方法修饰符：
- 方法描述：新增事件监听

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| type | ESYS_WindowEventType | 事件类型，当前支持 blur focus |
| listener | (ev: any) => any | 事件监听回调 |
| options | { capture?: boolean; once?: boolean; passive?: boolean; signal?: AbortSignal; } | (Optional) 可选参数 |

- 返回值类型：ISYS_WindowEventListenerRemovableObject | undefined
- 返回值描述：事件监听方法，用于移除事件监听，如若为 undefined 则表示创建事件监听失败

##### getCurrentTheme

- 方法签名：getCurrentTheme (): Promise < ESYS_Theme > ;
- 方法修饰符：
- 方法描述：获取当前主题

参数：

- 无

- 返回值类型：Promise< ESYS_Theme >
- 返回值描述：当前主题

##### getUrlAnchor

- 方法签名：getUrlAnchor (): string;
- 方法修饰符：
- 方法描述：获取 URL 锚点

参数：

- 无

- 返回值类型：string
- 返回值描述：URL 锚点值

##### getUrlParam

- 方法签名：getUrlParam (key: string): string | null ;
- 方法修饰符：
- 方法描述：获取 URL 参数

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 参数名 |

- 返回值类型：string | null
- 返回值描述：参数值

##### open

- 方法签名：open (url: string, target ?: ESYS_WindowOpenTarget): void ;
- 方法修饰符：
- 方法描述：打开资源窗口

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| url | string | 欲加载资源的 URL 或路径 |
| target | ESYS_WindowOpenTarget | (Optional) 上下文目标 |

- 返回值类型：void
- 返回值描述：

##### openUI

- 方法签名：openUI (uiName: string, args ?: { [key: string]: any; }): Promise <void> ;
- 方法修饰符：
- 方法描述：打开 UI 窗口

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uiName | string | UI 名称 |
| args | { [key: string]: any; } | (Optional) 可选参数对象 |

- 返回值类型：Promise<void>
- 返回值描述：

##### removeEventListener

- 方法签名：removeEventListener (removableObject: ISYS_WindowEventListenerRemovableObject): void ;
- 方法修饰符：
- 方法描述：移除事件监听

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| removableObject | ISYS_WindowEventListenerRemovableObject | 窗口事件监听可移除对象 |

- 返回值类型：void
- 返回值描述：

### 枚举

#### ESYS_BottomPanelTab

- 枚举签名：export declare enum ESYS_BottomPanelTab
- 枚举描述：底部面板标签页
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| FIND | "findResult" | 查找结果 |
| LIBRARY | "library" | 库 |
| LOG | "log" | 日志 |
| PCB_DRC | "drcResult" | PCB：DRC |
| SCHEMATIC_DRC | "schDrcResult" | 原理图：DRC |

#### ESYS_HeaderMenuEnvironment

- 枚举签名：export declare enum ESYS_HeaderMenuEnvironment
- 枚举描述：顶部菜单环境
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BLANK | "blank" | 空白页 |
| FOOTPRINT | "footprint" | 封装 |
| HOME | "home" | 主页 |
| PANEL | "panel" | 面板 |
| PANEL_VIEW | "panelView" | 面板预览 |
| PCB | "pcb" | PCB |
| PCB_VIEW | "pcbView" | PCB 预览（包括 2D、3D 预览） |
| SCHEMATIC | "sch" | 原理图 |
| SYMBOL | "symbol" | 符号（包括 CBB 符号） |

#### ESYS_LeftPanelTab

- 枚举签名：export declare enum ESYS_LeftPanelTab
- 枚举描述：左侧面板标签页
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BASIC_LIBRARY | "basicLibrary" | 常用库 |
| DEVICE_STANDARDIZATION | "device-standardization" | 器件标准化 |
| LIB_DESIGN | "libDesign" | 库设计 |
| PROJECT_DESIGN | "projectDesign" | 工程设计 |
| PROJECT_LIST | "project_list" | 工程 |

#### ESYS_LogType

- 枚举签名：export declare enum ESYS_LogType
- 枚举描述：日志类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ERROR | "error" | 错误 |
| FATAL_ERROR | "fatalError" | 致命错误 |
| INFO | "info" | 信息 |
| WARNING | "warn" | 警告 |

#### ESYS_NetlistType

- 枚举签名：export declare enum ESYS_NetlistType
- 枚举描述：网表类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ALLEGRO | "Allegro" | Allegro |
| ALTIUM_DESIGNER | "Protel2" | Altium Designer |
| DISA | "DISA" | 数字化工业软件联盟 |
| EASYEDA_PRO | "EasyEDA" | EasyEDA Pro Edition |
| JLCEDA_PRO | "JLCEDA" | 嘉立创 EDA 专业版 |
| PADS | "PADS" | PADS |
| PROTEL2 | "Protel2" | Protel 2 |

#### ESYS_RightPanelTab

- 枚举签名：export declare enum ESYS_RightPanelTab
- 枚举描述：右侧面板标签页
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ANNOTATION | "annotation" | 批注 |
| PANEL_3D_PREVIEW_ATTR | "panel3d-attr" | 面板 3D 预览：属性 |
| PANEL_3D_PREVIEW_LAYER | "panel3d-layer" | 面板 3D 预览：图层 |
| PANEL_ATTR | "panel-attr" | 面板：属性 |
| PANEL_FILTER | "panel-filter" | 面板：过滤 |
| PANEL_LAYER | "panel-layer" | 面板：图层 |
| PCB_2D_PREVIEW_ATTR | "pcb2d-attr" | PCB 2D 预览：属性 |
| PCB_3D_PREVIEW_ATTR | "pcb3d-attr" | PCB 3D 预览：属性 |
| PCB_3D_PREVIEW_LAYER | "pcb3d-layer" | PCB 3D 预览：图层 |
| PCB_ATTR | "pcb-attr" | PCB：属性 |
| PCB_FILTER | "pcb-filter" | PCB：过滤 |
| PCB_LAYER | "pcb-layer" | PCB：图层 |
| PCB_SKETCHER_ATTR | "pcb-sketcher-attr" | PCB：测量对象属性 |
| PROJECT_ATTR | "project-attr" | 工程：属性 |
| SCH_ATTR | "sch-attr" | 原理图：属性 |
| SCH_FILTER | "sch-filter" | 原理图：过滤 |

#### ESYS_ShortcutKeyEffectiveEditorDocumentType

- 枚举签名：export declare enum ESYS_ShortcutKeyEffectiveEditorDocumentType
- 枚举描述：快捷键生效页面范围
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BLANK | 0 | 空白页 |
| FOOTPRINT | 5 | 封装 |
| HOME | 1 | 开始页 |
| PANEL | 6 | 面板 |
| PANEL_3D_PREVIEW | 9 | 面板 3D 预览 |
| PANEL_LIBRARY | 10 | 面板库 |
| PCB | 4 | PCB |
| PCB_2D_PREVIEW | 8 | PCB 2D 预览 |
| PCB_3D_PREVIEW | 7 | PCB 3D 预览 |
| SCHEMATIC_PAGE | 2 | 原理图图页 |
| SYMBOL | 3 | 符号 |

#### ESYS_ShortcutKeyEffectiveEditorScene

- 枚举签名：export declare enum ESYS_ShortcutKeyEffectiveEditorScene
- 枚举描述：快捷键生效场景范围
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| DRAW | 4 | 画布绘制 |
| EDITOR | 1 | 非画布 |
| LOCAL | 6 | 局部快捷键 |
| NOT_SELECT_CANVAS | 3 | 画布未选中 |
| PLACE | 5 | 画布放置 |
| SELECT_CANVAS | 2 | 画布选中 |

#### ESYS_Theme

- 枚举签名：export declare enum ESYS_Theme
- 枚举描述：主题
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| DARK | "dark" | 深色 |
| LIGHT | "light" | 浅色 |

#### ESYS_ToastMessageType

- 枚举签名：export declare enum ESYS_ToastMessageType
- 枚举描述：吐司消息类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ASK | "question" | 问询 |
| ERROR | "error" | 错误 |
| INFO | "info" | 信息 |
| SUCCESS | "success" | 成功 |
| WARNING | "warn" | 警告 |

#### ESYS_Unit

- 枚举签名：export declare enum ESYS_Unit
- 枚举描述：单位
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| CENTIMETER | "cm" | 厘米 |
| DECIMETER | "dm" | 分米 |
| IN | "in" | 英尺 |
| INCH | "inch" | 英寸 |
| METER | "m" | 米 |
| MIL | "mil" | 密尔 |
| MILLIMETER | "mm" | 毫米 |

#### ESYS_WindowEventType

- 枚举签名：export declare enum ESYS_WindowEventType
- 枚举描述：窗口事件类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BLUR | "blur" | 失去焦点 |
| FOCUS | "focus" | 获取焦点 |

#### ESYS_WindowOpenTarget

- 枚举签名：export declare enum ESYS_WindowOpenTarget
- 枚举描述：打开窗口上下文目标
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BLANK | "_blank" | 新标签页 |
| SELF | "_self" | 当前页 |

### 接口

#### ISYS_FileSystemFileList

- 接口签名：export interface ISYS_FileSystemFileList
- 接口描述：文件系统文件路径
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| fileName |  | string | 文件名（前后均无斜杠） |
| fullPath |  | string | 完整路径，包含文件名的绝对路径 |
| isDirectory |  | boolean | 是否为目录 |
| relativePath |  | string | 相对路径，不包含前面的传入路径和文件名（当没有传入路径时，不存在相对路径），且前后均无斜杠 |
| subFiles |  | Array < ISYS_FileSystemFileList > | 目录子文件 |

接口方法：

- 无

#### ISYS_HeaderMenuSub1MenuItem

- 接口签名：export interface ISYS_HeaderMenuSub1MenuItem
- 接口描述：顶部二级菜单项
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| icon |  | string | 菜单项图标 |
| id |  | string | 菜单项 ID，不可重复 |
| menuItems |  | Array < ISYS_HeaderMenuSub2MenuItem \| null > | 子菜单项 |
| registerFn |  | string | 注册方法名称（需要在扩展入口文件导出该方法） |
| title |  | string | 菜单项标题 |

接口方法：

- 无

#### ISYS_HeaderMenuSub2MenuItem

- 接口签名：export interface ISYS_HeaderMenuSub2MenuItem
- 接口描述：顶部三级菜单项
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| icon |  | string | 菜单项图标 |
| id |  | string | 菜单项 ID，不可重复 |
| registerFn |  | string | 注册方法名称（需要在扩展入口文件导出该方法） |
| title |  | string | 菜单项标题 |

接口方法：

- 无

#### ISYS_HeaderMenuTopMenuItem

- 接口签名：export interface ISYS_HeaderMenuTopMenuItem
- 接口描述：顶部一级菜单项
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| id |  | string | 菜单项 ID，不可重复 |
| menuItems |  | Array < ISYS_HeaderMenuSub1MenuItem \| null > | 子菜单项 |
| registerFn |  | string | 注册方法名称（需要在扩展入口文件导出该方法） |
| title |  | string | 菜单项标题 |

接口方法：

- 无

#### ISYS_HeaderMenus

- 接口签名：export interface ISYS_HeaderMenus
- 接口描述：顶部菜单项
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| blank |  | Array < ISYS_HeaderMenuTopMenuItem > | 空白页 |
| footprint |  | Array < ISYS_HeaderMenuTopMenuItem > | 封装 |
| home |  | Array < ISYS_HeaderMenuTopMenuItem > | 主页 |
| panel |  | Array < ISYS_HeaderMenuTopMenuItem > | 面板 |
| panelView |  | Array < ISYS_HeaderMenuTopMenuItem > | 面板预览 |
| pcb |  | Array < ISYS_HeaderMenuTopMenuItem > | PCB |
| pcbView |  | Array < ISYS_HeaderMenuTopMenuItem > | PCB 预览（包括 2D、3D 预览） |
| sch |  | Array < ISYS_HeaderMenuTopMenuItem > | Warning: This API is now obsolete. 请使用 schematic 替代 sch |
| schematic |  | Array < ISYS_HeaderMenuTopMenuItem > | 原理图 |
| symbol |  | Array < ISYS_HeaderMenuTopMenuItem > | 符号（包括 CBB 符号） |

接口方法：

- 无

#### ISYS_LanguageKeyValuePairs

- 接口签名：export interface ISYS_LanguageKeyValuePairs
- 接口描述：语言数据键值对
- 接口备注：

属性：

- 无

接口方法：

- 无

#### ISYS_LogLine

- 接口签名：export interface ISYS_LogLine
- 接口描述：日志行
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| message |  | string | 日志内容 |
| timestamp |  | number | 时间戳 |
| type |  | ESYS_LogType | 日志类型 |

接口方法：

- 无

#### ISYS_MessageBusTask

- 接口签名：export interface ISYS_MessageBusTask
- 接口描述：消息总线任务
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| cancel |  | () => void | 调用以取消任务 |
| execute |  | ( message : any ) => Promise <void> | 任务处理 |
| running |  | () => boolean | 检查运行状态 |

接口方法：

- 无

#### ISYS_MultilingualLanguagesData

- 接口签名：export interface ISYS_MultilingualLanguagesData
- 接口描述：多语言数据
- 接口备注：

属性：

- 无

接口方法：

- 无

#### ISYS_RightClickMenuItem

- 接口签名：export interface ISYS_RightClickMenuItem
- 接口描述：右键菜单项
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| icon |  | string | 菜单项图标 |
| id |  | string | 菜单项 ID，不可重复 |
| menuItems |  | Array < ISYS_RightClickMenuItem \| null > | 子菜单项 |
| registerFn |  | string | 注册方法名称（需要在扩展入口文件导出该方法） |
| title |  | string | 菜单项标题 |

接口方法：

- 无

#### ISYS_WindowEventListenerRemovableObject

- 接口签名：export interface ISYS_WindowEventListenerRemovableObject
- 接口描述：窗口事件监听可移除对象
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| listener |  | ( ev : any ) => any |  |
| options |  | { capture?: boolean | (Optional) |
| type |  | ESYS_WindowEventType |  |

接口方法：

- 无

### 图元类

- 无

### 类型别名

| 类型别名 | 签名 | 描述 |
|---|---|---|
| TSYS_ShortcutKeys | export type TSYS_ShortcutKeys = Array < \| 'SHIFT' \| 'LEFT_SHIFT' \| 'RIGHT_SHIFT' \| 'FN' \| 'ALT' \| 'LEFT_ALT' \| 'RIGHT_ALT' \| 'CONTROL' \| 'LEFT_CONTROL' \| 'RIGHT_CONTROL' \| 'COMMAND' \| 'WIN' \| 'OPTION' \| 'SUPER' \| 'TAB' \| 'SPACE' \| 'UP' \| 'DOWN' \| 'LEFT' \| 'RIGHT' \| 'F1' \| 'F2' \| 'F3' \| 'F4' \| 'F5' \| 'F6' \| 'F7' \| 'F8' \| 'F9' \| 'F10' \| 'F11' \| 'F12' \| 'F13' \| 'F14' \| 'F15' \| 'F16' \| 'F17' \| 'F18' \| 'F19' \| 'F20' \| '`' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' \| '0' \| '-' \| '=' \| 'Q' \| 'W' \| 'E' \| 'R' \| 'T' \| 'Y' \| 'U' \| 'I' \| 'O' \| 'P' \| '[' \| ']' \| 'A' \| 'S' \| 'D' \| 'F' \| 'G' \| 'H' \| 'J' \| 'K' \| 'L' \| ';' \| ' \' ' \| ' \\ ' \| 'Z' \| 'X' \| 'C' \| 'V' \| 'B' \| 'N' \| 'M' \| ',' \| '.' \| '/' >; | 快捷键按键 |

### 变量

#### eda

- 变量签名：eda : EDA ;
- 变量描述：扩展 API 接口
- 变量备注：

变量属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| dmt_Board |  | DMT_Board |  |
| dmt_EditorControl |  | DMT_EditorControl |  |
| dmt_Folder |  | DMT_Folder |  |
| dmt_Panel |  | DMT_Panel |  |
| dmt_Pcb |  | DMT_Pcb |  |
| dmt_Project |  | DMT_Project |  |
| dmt_Schematic |  | DMT_Schematic |  |
| dmt_SelectControl |  | DMT_SelectControl |  |
| dmt_Team |  | DMT_Team |  |
| dmt_Workspace |  | DMT_Workspace |  |
| lib_3DModel |  | LIB_3DModel |  |
| lib_Cbb |  | LIB_Cbb |  |
| lib_Classification |  | LIB_Classification |  |
| lib_Device |  | LIB_Device |  |
| lib_Footprint |  | LIB_Footprint |  |
| lib_LibrariesList |  | LIB_LibrariesList |  |
| lib_PanelLibrary |  | LIB_PanelLibrary |  |
| lib_Symbol |  | LIB_Symbol |  |
| pcb_Document |  | PCB_Document |  |
| pcb_Drc |  | PCB_Drc |  |
| pcb_Event |  | PCB_Event |  |
| pcb_Layer |  | PCB_Layer |  |
| pcb_ManufactureData |  | PCB_ManufactureData |  |
| pcb_MathPolygon |  | PCB_MathPolygon |  |
| pcb_Net |  | PCB_Net |  |
| pcb_Primitive |  | PCB_Primitive |  |
| pcb_PrimitiveArc |  | PCB_PrimitiveArc |  |
| pcb_PrimitiveAttribute |  | PCB_PrimitiveAttribute |  |
| pcb_PrimitiveComponent |  | PCB_PrimitiveComponent |  |
| pcb_PrimitiveDimension |  | PCB_PrimitiveDimension |  |
| pcb_PrimitiveFill |  | PCB_PrimitiveFill |  |
| pcb_PrimitiveImage |  | PCB_PrimitiveImage |  |
| pcb_PrimitiveLine |  | PCB_PrimitiveLine |  |
| pcb_PrimitiveObject |  | PCB_PrimitiveObject |  |
| pcb_PrimitivePad |  | PCB_PrimitivePad |  |
| pcb_PrimitivePolyline |  | PCB_PrimitivePolyline |  |
| pcb_PrimitivePour |  | PCB_PrimitivePour |  |
| pcb_PrimitivePoured |  | PCB_PrimitivePoured |  |
| pcb_PrimitiveRegion |  | PCB_PrimitiveRegion |  |
| pcb_PrimitiveString |  | PCB_PrimitiveString |  |
| pcb_PrimitiveVia |  | PCB_PrimitiveVia |  |
| pcb_SelectControl |  | PCB_SelectControl |  |
| pnl_Document |  | PNL_Document |  |
| sch_Document |  | SCH_Document |  |
| sch_Drc |  | SCH_Drc |  |
| sch_Event |  | SCH_Event |  |
| sch_ManufactureData |  | SCH_ManufactureData |  |
| sch_Netlist |  | SCH_Netlist |  |
| sch_Primitive |  | SCH_Primitive |  |
| sch_PrimitiveArc |  | SCH_PrimitiveArc |  |
| sch_PrimitiveBus |  | SCH_PrimitiveBus |  |
| sch_PrimitiveCircle |  | SCH_PrimitiveCircle |  |
| sch_PrimitiveComponent |  | SCH_PrimitiveComponent \| SCH_PrimitiveComponent3 |  |
| sch_PrimitivePin |  | SCH_PrimitivePin |  |
| sch_PrimitivePolygon |  | SCH_PrimitivePolygon |  |
| sch_PrimitiveRectangle |  | SCH_PrimitiveRectangle |  |
| sch_PrimitiveText |  | SCH_PrimitiveText |  |
| sch_PrimitiveWire |  | SCH_PrimitiveWire |  |
| sch_SelectControl |  | SCH_SelectControl |  |
| sch_Utils |  | SCH_Utils |  |
| sys_ClientUrl |  | SYS_ClientUrl |  |
| sys_Dialog |  | SYS_Dialog |  |
| sys_Environment |  | SYS_Environment |  |
| sys_FileManager |  | SYS_FileManager |  |
| sys_FileSystem |  | SYS_FileSystem |  |
| sys_FontManager |  | SYS_FontManager |  |
| sys_HeaderMenu |  | SYS_HeaderMenu |  |
| sys_I18n |  | SYS_I18n |  |
| sys_IFrame |  | SYS_IFrame |  |
| sys_LoadingAndProgressBar |  | SYS_LoadingAndProgressBar |  |
| sys_Log |  | SYS_Log |  |
| sys_Message |  | SYS_Message |  |
| sys_MessageBox |  | SYS_MessageBox |  |
| sys_MessageBus |  | SYS_MessageBus |  |
| sys_PanelControl |  | SYS_PanelControl |  |
| sys_RightClickMenu |  | SYS_RightClickMenu |  |
| sys_Setting |  | SYS_Setting |  |
| sys_ShortcutKey |  | SYS_ShortcutKey |  |
| sys_Storage |  | SYS_Storage |  |
| sys_Timer |  | SYS_Timer |  |
| sys_ToastMessage |  | SYS_ToastMessage |  |
| sys_Tool |  | SYS_Tool |  |
| sys_Unit |  | SYS_Unit |  |
| sys_WebSocket |  | SYS_WebSocket |  |
| sys_Window |  | SYS_Window |  |

## 文档树

- 类：10（方法 77）；枚举：5；接口：14（成员 77）；图元类：0（方法 0）；类型别名：0；变量：0

### 类

#### DMT_Board

- 类签名：export declare class DMT_Board
- 类描述：文档树 / 板子管理类
- 类备注：

##### copyBoard

- 方法签名：copyBoard (sourceBoardName: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：复制板子

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| sourceBoardName | string | 源板子名称 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：新板子名称，如若为 undefined 则复制失败

##### createBoard

- 方法签名：createBoard (schematicUuid ?: string, pcbUuid ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | (Optional) 关联原理图 UUID |
| pcbUuid | string | (Optional) 关联 PCB UUID |

- 返回值类型：Promise<string | undefined>
- 返回值描述：板子名称，如若为 undefined 则创建失败

##### deleteBoard

- 方法签名：deleteBoard (boardName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：删除板子

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| boardName | string | 板子名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllBoardsInfo

- 方法签名：getAllBoardsInfo (): Promise < Array < IDMT_BoardItem >> ;
- 方法修饰符：
- 方法描述：获取工程内所有板子的详细属性

参数：

- 无

- 返回值类型：Promise<Array< IDMT_BoardItem >>
- 返回值描述：所有板子的详细属性的数组

##### getBoardInfo

- 方法签名：getBoardInfo (boardName: string): Promise < IDMT_BoardItem | undefined > ;
- 方法修饰符：
- 方法描述：获取板子的详细属性

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| boardName | string | 板子名称 |

- 返回值类型：Promise< IDMT_BoardItem | undefined>
- 返回值描述：板子的详细属性，如若为 undefined 则获取失败

##### getCurrentBoardInfo

- 方法签名：getCurrentBoardInfo (): Promise < IDMT_BoardItem | undefined > ;
- 方法修饰符：
- 方法描述：获取当前板子的详细属性

参数：

- 无

- 返回值类型：Promise< IDMT_BoardItem | undefined>
- 返回值描述：板子的详细属性，如若为 undefined 则获取失败

##### modifyBoardName

- 方法签名：modifyBoardName (originalBoardName: string, boardName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：修改板子名称

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| originalBoardName | string | 原板子名称 |
| boardName | string | 新板子名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

#### DMT_EditorControl

- 类签名：export declare class DMT_EditorControl
- 类描述：文档树 / 编辑器控制类
- 类备注：

##### activateDocument

- 方法签名：activateDocument (tabId: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：激活文档

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | 标签页 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### activateSplitScreen

- 方法签名：activateSplitScreen (splitScreenId: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：激活分屏

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| splitScreenId | string | 分屏 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### closeDocument

- 方法签名：closeDocument (tabId: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：关闭文档

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | 标签页 ID，此处支持 IDMT_SchematicPageItem.uuid 、 IDMT_PcbItem.uuid 、 IDMT_PanelItem.uuid 作为输入 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### createSplitScreen

- 方法签名：createSplitScreen (splitScreenType: EDMT_EditorSplitScreenDirection, tabId: string): Promise <{ sourceSplitScreenId : string ; newSplitScreenId : string ; } | undefined >;
- 方法修饰符：
- 方法描述：创建分屏

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| splitScreenType | EDMT_EditorSplitScreenDirection | 分屏类型， horizontal 水平、 vertical 垂直 |
| tabId | string | 标签页 ID，该标签页将会被移入新的分屏中 |

- 返回值类型：Promise<{ sourceSplitScreenId: string; newSplitScreenId: string; } | undefined>
- 返回值描述：分屏 ID， sourceSplitScreenId 代表源分屏， newSplitScreenId 代表新分屏

##### generateIndicatorMarkers

- 方法签名：generateIndicatorMarkers (markers: Array < IDMT_IndicatorMarkerShape > , color ?: { r: number; g: number; b: number; alpha: number; }, lineWidth ?: number, zoom ?: boolean, tabId ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| markers | Array< IDMT_IndicatorMarkerShape > | 指示标记外形对象数组 |
| color | { r: number; g: number; b: number; alpha: number; } | (Optional) 指示标记颜色 |
| lineWidth | number | (Optional) 线宽 |
| zoom | boolean | (Optional) 是否定位并缩放 |
| tabId | string | (Optional) 标签页 ID，如若未传入，则为最后输入焦点的画布 |

- 返回值类型：Promise<boolean>
- 返回值描述：指示标记生成是否成功， false 表示画布不支持该操作或 tabId 不存在

##### getCurrentRenderedAreaImage

- 方法签名：getCurrentRenderedAreaImage (tabId ?: string): Promise < Blob | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | (Optional) 标签页 ID，如若未传入，则获取最后输入焦点的画布 |

- 返回值类型：Promise<Blob | undefined>
- 返回值描述：

##### getSplitScreenIdByTabId

- 方法签名：getSplitScreenIdByTabId (tabId: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：使用标签页 ID 获取分屏 ID

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | 标签页 ID |

- 返回值类型：Promise<string | undefined>
- 返回值描述：分屏 ID

##### getSplitScreenTree

- 方法签名：getSplitScreenTree (): Promise < IDMT_EditorSplitScreenItem | undefined > ;
- 方法修饰符：
- 方法描述：获取编辑器分屏属性树

参数：

- 无

- 返回值类型：Promise< IDMT_EditorSplitScreenItem | undefined>
- 返回值描述：编辑器分屏属性树，如若为 undefined ，则数据获取失败

##### getTabsBySplitScreenId

- 方法签名：getTabsBySplitScreenId (splitScreenId: string): Promise < Array < IDMT_EditorTabItem >> ;
- 方法修饰符：
- 方法描述：获取指定分屏 ID 下的所有标签页

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| splitScreenId | string | 分屏 ID |

- 返回值类型：Promise<Array< IDMT_EditorTabItem >>
- 返回值描述：标签页列表

##### mergeAllDocumentFromSplitScreen

- 方法签名：mergeAllDocumentFromSplitScreen (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：合并所有分屏

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### moveDocumentToSplitScreen

- 方法签名：moveDocumentToSplitScreen (tabId: string, splitScreenId: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：将文档移动到指定分屏

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | 标签页 ID |
| splitScreenId | string | 分屏 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### openDocument

- 方法签名：openDocument (documentUuid: string, splitScreenId ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：打开文档

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| documentUuid | string | 文档 UUID，此处支持 IDMT_SchematicItem.uuid 、 IDMT_SchematicPageItem.uuid 、 IDMT_PcbItem.uuid 、 IDMT_PanelItem.uuid 作为输入 |
| splitScreenId | string | (Optional) 分屏 ID，即 DMT_EditorControl.getSplitScreenTree() 方法获取到的 IDMT_EditorSplitScreenItem.id |

- 返回值类型：Promise<string | undefined>
- 返回值描述：标签页 ID，如若为 undefined ，则打开文档失败

##### openLibraryDocument

- 方法签名：openLibraryDocument (libraryUuid: string, libraryType: ELIB_LibraryType. SYMBOL | ELIB_LibraryType. FOOTPRINT , uuid: string, splitScreenId ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| libraryType | ELIB_LibraryType.SYMBOL \| ELIB_LibraryType.FOOTPRINT | 库类型，支持符号和封装 |
| uuid | string | 符号、封装 UUID |
| splitScreenId | string | (Optional) 分屏 ID，即 DMT_EditorControl.getSplitScreenTree() 方法获取到的 IDMT_EditorSplitScreenItem.id |

- 返回值类型：Promise<string | undefined>
- 返回值描述：标签页 ID，如若为 undefined ，则打开文档失败

##### removeIndicatorMarkers

- 方法签名：removeIndicatorMarkers (tabId ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | (Optional) 标签页 ID，如若未传入，则为最后输入焦点的画布 |

- 返回值类型：Promise<boolean>
- 返回值描述：指示标记移除是否成功， false 表示画布不支持该操作或 tabId 不存在

##### tileAllDocumentToSplitScreen

- 方法签名：tileAllDocumentToSplitScreen (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：平铺所有文档

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### zoomTo

- 方法签名：zoomTo (x ?: number, y ?: number, scaleRatio ?: number, tabId ?: string): Promise <{ left : number ; right : number ; top : number ; bottom : number ; } | false >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | (Optional) 中心坐标 X，如若不传入则不改变当前 X 坐标 |
| y | number | (Optional) 中心坐标 Y，如若不传入则不改变当前 Y 坐标 |
| scaleRatio | number | (Optional) 缩放比，如若不传入则不改变当前缩放比，单位跨度为 1/100 ，如若传入 200 ，则表示缩放比为 200% |
| tabId | string | (Optional) 标签页 ID，如若未传入，则为最后输入焦点的画布 |

- 返回值类型：Promise<{ left: number; right: number; top: number; bottom: number; } | false>
- 返回值描述：缩放到的区域数据， false 表示画布不支持该缩放操作或 tabId 不存在

##### zoomToAllPrimitives

- 方法签名：zoomToAllPrimitives (tabId ?: string): Promise <{ left : number ; right : number ; top : number ; bottom : number ; } | false >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | (Optional) 标签页 ID，如若未传入，则为最后输入焦点的画布 |

- 返回值类型：Promise<{ left: number; right: number; top: number; bottom: number; } | false>
- 返回值描述：缩放到的区域数据， false 表示画布不支持该缩放操作或 tabId 不存在

##### zoomToRegion

- 方法签名：zoomToRegion (left: number, right: number, top: number, bottom: number, tabId ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| left | number | 矩形框第一 X 坐标 |
| right | number | 矩形框第二 X 坐标 |
| top | number | 矩形框第一 Y 坐标 |
| bottom | number | 矩形框第二 Y 坐标 |
| tabId | string | (Optional) 标签页 ID，如若未传入，则为最后输入焦点的画布 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### zoomToSelectedPrimitives

- 方法签名：zoomToSelectedPrimitives (tabId ?: string): Promise <{ left : number ; right : number ; top : number ; bottom : number ; } | false >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| tabId | string | (Optional) 标签页 ID，如若未传入，则为最后输入焦点的画布 |

- 返回值类型：Promise<{ left: number; right: number; top: number; bottom: number; } | false>
- 返回值描述：缩放到的区域数据， false 表示画布不支持该缩放操作或 tabId 不存在

#### DMT_Folder

- 类签名：export declare class DMT_Folder
- 类描述：文档树 / 文件夹类
- 类备注：

##### createFolder

- 方法签名：createFolder (folderName: string, teamUuid: string, parentFolderUuid ?: string, description ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| folderName | string | 文件夹名称 |
| teamUuid | string | 团队 UUID |
| parentFolderUuid | string | (Optional) 父文件夹 UUID，如若不指定，则为根文件夹 |
| description | string | (Optional) 文件夹描述 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：文件夹 UUID，如若为 undefined 则创建失败

##### deleteFolder

- 方法签名：deleteFolder (teamUuid: string, folderUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：删除文件夹

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | 团队 UUID |
| folderUuid | string | 文件夹 UUID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllFoldersUuid

- 方法签名：getAllFoldersUuid (teamUuid: string): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：获取所有文件夹的 UUID

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | 团队 UUID |

- 返回值类型：Promise<Array<string>>
- 返回值描述：文件夹 UUID 数组

##### getFolderInfo

- 方法签名：getFolderInfo (teamUuid: string, folderUuid: string): Promise < IDMT_FolderItem | undefined > ;
- 方法修饰符：
- 方法描述：获取文件夹详细属性

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | 团队 UUID |
| folderUuid | string | 文件夹 UUID |

- 返回值类型：Promise< IDMT_FolderItem | undefined>
- 返回值描述：文件夹属性，如若为 undefined 则获取失败

##### modifyFolderDescription

- 方法签名：modifyFolderDescription (teamUuid: string, folderUuid: string, description ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | 团队 UUID |
| folderUuid | string | 文件夹 UUID |
| description | string | (Optional) 文件夹描述，如若为 undefined 则清空工程现有描述 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

##### modifyFolderName

- 方法签名：modifyFolderName (teamUuid: string, folderUuid: string, folderName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：修改文件夹名称

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | 团队 UUID |
| folderUuid | string | 文件夹 UUID |
| folderName | string | 文件夹名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

##### moveFolderToFolder

- 方法签名：moveFolderToFolder (teamUuid: string, folderUuid: string, parentFolderUuid ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：移动文件夹

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | 团队 UUID |
| folderUuid | string | 文件夹 UUID |
| parentFolderUuid | string | (Optional) 父文件夹 UUID，如若不指定，则默认为根文件夹 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否移动成功

#### DMT_Panel

- 类签名：export declare class DMT_Panel
- 类描述：文档树 / 面板管理类
- 类备注：

##### copyPanel

- 方法签名：copyPanel (panelUuid: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：复制面板

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelUuid | string | 源面板 UUID |

- 返回值类型：Promise<string | undefined>
- 返回值描述：新面板 UUID，如若为 undefined 则复制失败

##### createPanel

- 方法签名：createPanel (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：面板 UUID，如若为 undefined 则创建失败

##### deletePanel

- 方法签名：deletePanel (panelUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：删除面板

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelUuid | string | 面板 UUID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllPanelsInfo

- 方法签名：getAllPanelsInfo (): Promise < Array < IDMT_PanelItem >> ;
- 方法修饰符：
- 方法描述：获取工程内所有面板的详细属性

参数：

- 无

- 返回值类型：Promise<Array< IDMT_PanelItem >>
- 返回值描述：所有面板的详细属性的数组

##### getCurrentPanelInfo

- 方法签名：getCurrentPanelInfo (): Promise < IDMT_PanelItem | undefined > ;
- 方法修饰符：
- 方法描述：获取当前面板的详细属性

参数：

- 无

- 返回值类型：Promise< IDMT_PanelItem | undefined>
- 返回值描述：面板的详细属性，如若为 undefined 则获取失败

##### getPanelInfo

- 方法签名：getPanelInfo (panelUuid: string): Promise < IDMT_PanelItem | undefined > ;
- 方法修饰符：
- 方法描述：获取面板的详细属性

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelUuid | string | 面板 UUID |

- 返回值类型：Promise< IDMT_PanelItem | undefined>
- 返回值描述：面板的详细属性，如若为 undefined 则获取失败

##### modifyPanelName

- 方法签名：modifyPanelName (panelUuid: string, panelName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：修改面板名称

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelUuid | string | 面板 UUID |
| panelName | string | 面板名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

#### DMT_Pcb

- 类签名：export declare class DMT_Pcb
- 类描述：文档树 / PCB 管理类
- 类备注：

##### copyPcb

- 方法签名：copyPcb (pcbUuid: string, boardName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：复制 PCB

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pcbUuid | string | 源 PCB UUID |
| boardName | string | (Optional) 新 PCB 所属板子名称，如若不指定则为游离 PCB |

- 返回值类型：Promise<string | undefined>
- 返回值描述：新 PCB UUID，如若为 undefined 则复制失败

##### createPcb

- 方法签名：createPcb (boardName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：创建 PCB

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| boardName | string | (Optional) 所属板子名称，如若不指定则为游离 PCB |

- 返回值类型：Promise<string | undefined>
- 返回值描述：PCB UUID，如若为 undefined 则创建失败

##### deletePcb

- 方法签名：deletePcb (pcbUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：删除 PCB

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pcbUuid | string | PCB UUID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllPcbsInfo

- 方法签名：getAllPcbsInfo (): Promise < Array < IDMT_PcbItem >> ;
- 方法修饰符：
- 方法描述：获取工程内所有 PCB 的详细属性

参数：

- 无

- 返回值类型：Promise<Array< IDMT_PcbItem >>
- 返回值描述：所有 PCB 的详细属性的数组

##### getCurrentPcbInfo

- 方法签名：getCurrentPcbInfo (): Promise < IDMT_PcbItem | undefined > ;
- 方法修饰符：
- 方法描述：获取当前 PCB 的详细属性

参数：

- 无

- 返回值类型：Promise< IDMT_PcbItem | undefined>
- 返回值描述：PCB 的详细属性，如若为 undefined 则获取失败

##### getPcbInfo

- 方法签名：getPcbInfo (pcbUuid: string): Promise < IDMT_PcbItem | undefined > ;
- 方法修饰符：
- 方法描述：获取 PCB 的详细属性

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pcbUuid | string | PCB UUID |

- 返回值类型：Promise< IDMT_PcbItem | undefined>
- 返回值描述：PCB 的详细属性，如若为 undefined 则获取失败

##### modifyPcbName

- 方法签名：modifyPcbName (pcbUuid: string, pcbName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：修改 PCB 名称

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pcbUuid | string | PCB UUID |
| pcbName | string | PCB 名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

#### DMT_Project

- 类签名：export declare class DMT_Project
- 类描述：文档树 / 工程管理类
- 类备注：

##### createProject

- 方法签名：createProject (projectFriendlyName: string, projectName ?: string, teamUuid ?: string, folderUuid ?: string, description ?: string, collaborationMode ?: EDMT_ProjectCollaborationMode): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectFriendlyName | string | 工程友好名称 |
| projectName | string | (Optional) 工程名称，不可重复，仅支持字母 a-zA-Z 、数字 0-9 、中划线 - ，如若不指定，则根据工程友好名称自动生成 |
| teamUuid | string | (Optional) 团队 UUID，如若不指定，则默认为个人；在不存在个人工程的环境下必须指定团队 UUID |
| folderUuid | string | (Optional) 文件夹 UUID，如若不指定，则为根文件夹 |
| description | string | (Optional) 工程描述 |
| collaborationMode | EDMT_ProjectCollaborationMode | (Optional) 工程协作模式，如若团队权限无需工程设置协作模式，则该参数将被忽略 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：工程 UUID，如若为 undefined 则创建失败

##### getAllProjectsUuid

- 方法签名：getAllProjectsUuid (teamUuid ?: string, folderUuid ?: string, workspaceUuid ?: string): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：获取所有工程的 UUID

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| teamUuid | string | (Optional) 团队 UUID |
| folderUuid | string | (Optional) 文件夹 UUID，如若不指定，则默认为团队的根文件夹 |
| workspaceUuid | string | (Optional) 工作区 UUID |

- 返回值类型：Promise<Array<string>>
- 返回值描述：工程 UUID 数组

##### getCurrentProjectInfo

- 方法签名：getCurrentProjectInfo (): Promise < IDMT_ProjectItem | undefined > ;
- 方法修饰符：
- 方法描述：获取当前工程的详细属性

参数：

- 无

- 返回值类型：Promise< IDMT_ProjectItem | undefined>
- 返回值描述：工程属性，如若为 undefined 则获取失败

##### getProjectInfo

- 方法签名：getProjectInfo (projectUuid: string): Promise < IDMT_BriefProjectItem | undefined > ;
- 方法修饰符：
- 方法描述：获取工程属性

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectUuid | string | 工程 UUID |

- 返回值类型：Promise< IDMT_BriefProjectItem | undefined>
- 返回值描述：简略的工程属性，如若为 undefined 则获取失败

##### moveProjectToFolder

- 方法签名：moveProjectToFolder (projectUuid: string, folderUuid ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：移动工程到文件夹

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectUuid | string | 工程 UUID |
| folderUuid | string | (Optional) 文件夹 UUID，只能为当前工程所在团队或个人下的文件夹，如若为 undefined 则移动到当前团队的根文件夹 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否移动成功

##### openProject

- 方法签名：openProject (projectUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：打开工程

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| projectUuid | string | 工程 UUID |

- 返回值类型：Promise<boolean>
- 返回值描述：是否成功打开工程

#### DMT_Schematic

- 类签名：export declare class DMT_Schematic
- 类描述：文档树 / 原理图管理类
- 类备注：

##### copySchematic

- 方法签名：copySchematic (schematicUuid: string, boardName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | 源原理图 UUID |
| boardName | string | (Optional) 新原理图所属板子名称，如若不指定则为游离原理图 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：新原理图 UUID，如若为 undefined 则复制失败

##### copySchematicPage

- 方法签名：copySchematicPage (schematicPageUuid: string, schematicUuid ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicPageUuid | string | 源原理图图页 UUID |
| schematicUuid | string | (Optional) 目标原理图 UUID，如若不指定则为当前原理图 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：新原理图图页 UUID，如若为 undefined 则复制失败

##### createSchematic

- 方法签名：createSchematic (boardName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| boardName | string | (Optional) 所属板子名称，如若不指定则为游离原理图 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：原理图 UUID，如若为 undefined 则创建失败

##### createSchematicPage

- 方法签名：createSchematicPage (schematicUuid: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | 所属原理图 UUID |

- 返回值类型：Promise<string | undefined>
- 返回值描述：原理图图页 UUID，如若为 undefined 则创建失败

##### deleteSchematic

- 方法签名：deleteSchematic (schematicUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | 原理图 UUID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteSchematicPage

- 方法签名：deleteSchematicPage (schematicPageUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicPageUuid | string | 原理图图页 UUID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllSchematicPagesInfo

- 方法签名：getAllSchematicPagesInfo (): Promise < Array < IDMT_SchematicPageItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IDMT_SchematicPageItem >>
- 返回值描述：所有原理图图页的详细属性的数组

##### getAllSchematicsInfo

- 方法签名：getAllSchematicsInfo (): Promise < Array < IDMT_SchematicItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IDMT_SchematicItem >>
- 返回值描述：所有原理图的详细属性的数组

##### getCurrentSchematicAllSchematicPagesInfo

- 方法签名：getCurrentSchematicAllSchematicPagesInfo (): Promise < Array < IDMT_SchematicPageItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IDMT_SchematicPageItem >>
- 返回值描述：所有原理图图页的详细属性的数组

##### getCurrentSchematicInfo

- 方法签名：getCurrentSchematicInfo (): Promise < IDMT_SchematicItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IDMT_SchematicItem | undefined>
- 返回值描述：原理图的详细属性，如若为 undefined 则获取失败

##### getCurrentSchematicPageInfo

- 方法签名：getCurrentSchematicPageInfo (): Promise < IDMT_SchematicPageItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IDMT_SchematicPageItem | undefined>
- 返回值描述：原理图图页的详细属性，如若为 undefined 则获取失败

##### getSchematicInfo

- 方法签名：getSchematicInfo (schematicUuid: string): Promise < IDMT_SchematicItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | 原理图 UUID |

- 返回值类型：Promise< IDMT_SchematicItem | undefined>
- 返回值描述：原理图的详细属性，如若为 undefined 则获取失败

##### getSchematicPageInfo

- 方法签名：getSchematicPageInfo (schematicPageUuid: string): Promise < IDMT_SchematicPageItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicPageUuid | string | 原理图图页 UUID |

- 返回值类型：Promise< IDMT_SchematicPageItem | undefined>
- 返回值描述：原理图图页的详细属性，如若为 undefined 则获取失败

##### modifySchematicName

- 方法签名：modifySchematicName (schematicUuid: string, schematicName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | 原理图 UUID |
| schematicName | string | 原理图名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

##### modifySchematicPageName

- 方法签名：modifySchematicPageName (schematicPageUuid: string, schematicPageName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicPageUuid | string | 原理图图页 UUID |
| schematicPageName | string | 原理图图页名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否修改成功

##### modifySchematicPageTitleBlock

- 方法签名：modifySchematicPageTitleBlock (showTitleBlock ?: boolean, titleBlockData ?: { [key: string]: { showTitle?: boolean; showValue ?: boolean; value ?: any; }; }): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| showTitleBlock | boolean | (Optional) 是否显示明细表，不定义将保持当前状态 |
| titleBlockData | { [key: string]: { showTitle?: boolean; showValue?: boolean; value?: any; }; } | (Optional) 需要修改的明细项及其修改的值 |

- 返回值类型：Promise<boolean>
- 返回值描述：修改操作是否成功，如若未传入 showTitleBlock 和 titleBlockData 将返回 false ；请注意，如若存在无法识别的明细项但程序并未出错，将返回 true 的结果，因为无法识别的明细项被忽略

##### reorderSchematicPages

- 方法签名：reorderSchematicPages (schematicUuid: string, schematicPageItemsArray: Array < IDMT_SchematicPageItem > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| schematicUuid | string | 执行排序的图页所关联的原理图 UUID |
| schematicPageItemsArray | Array< IDMT_SchematicPageItem > | 所有原理图图页属性的数组 |

- 返回值类型：Promise<boolean>
- 返回值描述：排序操作是否成功

#### DMT_SelectControl

- 类签名：export declare class DMT_SelectControl
- 类描述：文档树 / 选择控制类
- 类备注：

##### getCurrentDocumentInfo

- 方法签名：getCurrentDocumentInfo (): Promise < IDMT_EditorDocumentItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IDMT_EditorDocumentItem | undefined>
- 返回值描述：文档类型、UUID、所属工程的 UUID、所属库的 UUID 组成的对象，如若为 undefined 则获取失败

#### DMT_Team

- 类签名：export declare class DMT_Team
- 类描述：文档树 / 团队类
- 类备注：

##### getAllInvolvedTeamInfo

- 方法签名：getAllInvolvedTeamInfo (): Promise < Array < IDMT_TeamItem >> ;
- 方法修饰符：
- 方法描述：获取所有参与的团队的详细属性

参数：

- 无

- 返回值类型：Promise<Array< IDMT_TeamItem >>
- 返回值描述：所有参与的团队的详细属性

##### getAllTeamsInfo

- 方法签名：getAllTeamsInfo (): Promise < Array < IDMT_TeamItem >> ;
- 方法修饰符：
- 方法描述：获取所有直接团队的详细属性

参数：

- 无

- 返回值类型：Promise<Array< IDMT_TeamItem >>
- 返回值描述：所有团队的详细属性

##### getCurrentTeamInfo

- 方法签名：getCurrentTeamInfo (): Promise < IDMT_TeamItem | undefined > ;
- 方法修饰符：
- 方法描述：获取当前团队的详细属性

参数：

- 无

- 返回值类型：Promise< IDMT_TeamItem | undefined>
- 返回值描述：团队的详细属性，如若为 undefined 则获取失败

#### DMT_Workspace

- 类签名：export declare class DMT_Workspace
- 类描述：文档树 / 工作区类
- 类备注：

##### getAllWorkspacesInfo

- 方法签名：getAllWorkspacesInfo (): Promise < Array < IDMT_WorkspaceItem >> ;
- 方法修饰符：
- 方法描述：获取所有工作区的详细属性

参数：

- 无

- 返回值类型：Promise<Array< IDMT_WorkspaceItem >>
- 返回值描述：所有工作区的详细属性

##### getCurrentWorkspaceInfo

- 方法签名：getCurrentWorkspaceInfo (): Promise < IDMT_WorkspaceItem | undefined > ;
- 方法修饰符：
- 方法描述：获取当前工作区的详细属性

参数：

- 无

- 返回值类型：Promise< IDMT_WorkspaceItem | undefined>
- 返回值描述：工作区的详细属性，如若为 undefined 则获取失败

##### toggleToWorkspace

- 方法签名：toggleToWorkspace (workspaceUuid ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：切换到工作区

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| workspaceUuid | string | (Optional) 工作区 UUID，如若不指定，则将切换到个人工作区 |

- 返回值类型：Promise<boolean>
- 返回值描述：切换操作是否成功

### 枚举

#### EDMT_EditorDocumentType

- 枚举签名：export declare enum EDMT_EditorDocumentType
- 枚举描述：编辑器文档类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BLANK | 0 | 空白页 |
| FOOTPRINT | 4 | 封装 |
| HOME | -1 | 开始页 |
| PANEL | 26 | 面板 |
| PANEL_3D_PREVIEW | 27 | 面板 3D 预览 |
| PANEL_LIBRARY | 29 | 面板库 |
| PCB | 3 | PCB |
| PCB_2D_PREVIEW | 12 | PCB 2D 预览 |
| PCB_3D_PREVIEW | 15 | PCB 3D 预览 |
| SCHEMATIC_PAGE | 1 | 原理图图页 |
| SYMBOL_CBB | 17 | 复用模块符号 |
| SYMBOL_COMPONENT | 2 | 元件符号 |
| SYMBOL_DRAWING | 20 | 图纸符号 |
| SYMBOL_NET_FLAG | 18 | 网络标识符号 |
| SYMBOL_NET_PORT | 19 | 网络端口符号 |
| SYMBOL_NON_ELECTRICAL | 21 | 无电气符号 |
| SYMBOL_SHORT_CIRCUIT_FLAG | 22 | 短接标识符号 |

#### EDMT_EditorSplitScreenDirection

- 枚举签名：export declare enum EDMT_EditorSplitScreenDirection
- 枚举描述：编辑器分屏方向
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| HORIZONTAL | "horizontal" | 水平 |
| VERTICAL | "vertical" | 垂直 |

#### EDMT_IndicatorMarkerType

- 枚举签名：export declare enum EDMT_IndicatorMarkerType
- 枚举描述：指示标记类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ARC | "arc" | 圆弧 |
| CIRCLE | "circle" | 圆形 |
| LINE | "line" | 线段 |
| POINT | "point" | 点 |
| RECTANGLE | "rectangle" | 矩形 |

#### EDMT_ItemType

- 枚举签名：export declare enum EDMT_ItemType
- 枚举描述：文档树项目类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BOARD | "Board" | 板子 |
| CBB_PCB | "CBB PCB" | 复用模块 PCB |
| CBB_PROJECT | "CBB Project" | 复用模块工程 |
| CBB_SCHEMATIC | "CBB Schematic" | 复用模块原理图 |
| FOLDER | "Folder" | 文件夹 |
| PANEL | "Panel" | 面板 |
| PCB | "PCB" | PCB |
| PROJECT | "Project" | 工程 |
| SCHEMATIC | "Schematic" | 原理图 |
| SCHEMATIC_PAGE | "Schematic Page" | 原理图图页 |
| TEAM | "Team" | 团队 |
| WORKSPACE | "Workspace" | 工作区 |

#### EDMT_ProjectCollaborationMode

- 枚举签名：export declare enum EDMT_ProjectCollaborationMode
- 枚举描述：工程协作模式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| FREE | 1 | 自由 |
| STRICT | 3 | 严格 |

### 接口

#### IDMT_BoardItem

- 接口签名：export interface IDMT_BoardItem
- 接口描述：板子属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| itemType | readonly | EDMT_ItemType. BOARD | 项目类型 |
| name |  | string | 板子名称 |
| parentProjectUuid |  | string | 所属工程 UUID |
| pcb |  | IDMT_PcbItem | 下属 PCB |
| schematic |  | IDMT_SchematicItem | 下属原理图 |

接口方法：

- 无

#### IDMT_BriefProjectItem

- 接口签名：export interface IDMT_BriefProjectItem
- 接口描述：简略工程属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| folderUuid |  | string | 所属文件夹 UUID |
| friendlyName |  | string | 工程友好名称 |
| itemType | readonly | EDMT_ItemType. PROJECT \| EDMT_ItemType. CBB_PROJECT | 项目类型 |
| teamUuid |  | string | 所属团队 UUID |
| uuid |  | string | 工程 UUID |

接口方法：

- 无

#### IDMT_EditorDocumentItem

- 接口签名：export interface IDMT_EditorDocumentItem
- 接口描述：编辑器文档对象
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| documentType |  | EDMT_EditorDocumentType | 文档类型 |
| parentLibraryUuid |  | string | 库文档所属库 UUID |
| parentProjectUuid |  | string | 文档所属工程 UUID |
| tabId |  | string | 文档的标签页 ID |
| uuid |  | string | 文档 UUID |

接口方法：

- 无

#### IDMT_EditorSplitScreenItem

- 接口签名：export interface IDMT_EditorSplitScreenItem
- 接口描述：编辑器分屏属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| children |  | Array < IDMT_EditorSplitScreenItem > | 子分屏 |
| direction |  | EDMT_EditorSplitScreenDirection | 分屏方向 |
| fatherId |  | string | 父级分屏 ID |
| id |  | string | 分屏 ID |
| tabs |  | Array < IDMT_EditorTabItem > | 分屏内标签页 |

接口方法：

- 无

#### IDMT_EditorTabItem

- 接口签名：export interface IDMT_EditorTabItem
- 接口描述：编辑器标签页
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| draggable |  | boolean | 标签页是否可拖动 |
| isAbleDelete |  | boolean | 标签页是否可关闭 |
| tabId |  | string | 标签页 ID |
| title |  | string | 标签页标题 |

接口方法：

- 无

#### IDMT_FolderItem

- 接口签名：export interface IDMT_FolderItem
- 接口描述：文件夹属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| childrenFoldersUuid |  | Array < string > | 子文件夹 UUID 列表 |
| description |  | string | 文件夹描述 |
| itemType | readonly | EDMT_ItemType. FOLDER | 项目类型 |
| name |  | string | 文件夹名称 |
| parentFolderUuid |  | string | 父文件夹 UUID |
| teamUuid |  | string | 所属团队 UUID |
| uuid |  | string | 文件夹 UUID |

接口方法：

- 无

#### IDMT_IndicatorMarkerShape

- 接口签名：export interface IDMT_IndicatorMarkerShape
- 接口描述：指示标记外形
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| angle |  | number | 圆弧：角度 |
| bottom |  | number | 矩形：下 Y |
| endX |  | number | 线段 \| 圆弧：终止点 X |
| endY |  | number | 线段 \| 圆弧：终止点 Y |
| left |  | number | 矩形：左 X |
| r |  | number | 圆形：半径 |
| right |  | number | 矩形：右 X |
| startX |  | number | 线段 \| 圆弧：起始点 X |
| startY |  | number | 线段 \| 圆弧：起始点 Y |
| top |  | number | 矩形：上 Y |
| type |  | EDMT_IndicatorMarkerType | 类型 |
| x |  | number | 点：坐标 X |
| y |  | number | 点：坐标 Y |

接口方法：

- 无

#### IDMT_PanelItem

- 接口签名：export interface IDMT_PanelItem
- 接口描述：面板属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| itemType | readonly | EDMT_ItemType. PANEL | 项目类型 |
| name |  | string | 面板名称 |
| parentProjectUuid |  | string | 所属工程 UUID |
| uuid |  | string | 面板 UUID |

接口方法：

- 无

#### IDMT_PcbItem

- 接口签名：export interface IDMT_PcbItem
- 接口描述：PCB 属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| itemType | readonly | EDMT_ItemType. PCB \| EDMT_ItemType. CBB_PCB | 项目类型 |
| name |  | string | PCB 名称 |
| parentBoardName |  | string | 所属板子名称 |
| parentProjectUuid |  | string | 所属工程 UUID |
| uuid |  | string | PCB UUID |

接口方法：

- 无

#### IDMT_ProjectItem

- 接口签名：export interface IDMT_ProjectItem extends IDMT_BriefProjectItem
- 接口描述：工程属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| collaborationMode |  | EDMT_ProjectCollaborationMode | 工程协作模式 |
| data |  | Array < IDMT_BoardItem \| IDMT_SchematicItem \| IDMT_PcbItem \| IDMT_PanelItem > | 工程内文档数据 |
| description |  | string | 描述 |
| name |  | string | 工程链接名称 |

接口方法：

- 无

#### IDMT_SchematicItem

- 接口签名：export interface IDMT_SchematicItem
- 接口描述：原理图属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| cbbSymbol |  | ILIB_SymbolItem | 复用模块原理图关联的模块符号 |
| itemType | readonly | EDMT_ItemType. SCHEMATIC \| EDMT_ItemType. CBB_SCHEMATIC | 项目类型 |
| name |  | string | 原理图名称 |
| page |  | Array < IDMT_SchematicPageItem > | 下属原理图图页 |
| parentBoardUuid |  | string | 所属板子 UUID |
| parentProjectUuid |  | string | 所属工程 UUID |
| uuid |  | string | 原理图 UUID |

接口方法：

- 无

#### IDMT_SchematicPageItem

- 接口签名：export interface IDMT_SchematicPageItem
- 接口描述：原理图图页属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| itemType | readonly | EDMT_ItemType. SCHEMATIC_PAGE | 项目类型 |
| name |  | string | 原理图图页名称 |
| parentSchematicUuid |  | string | 所属原理图 UUID |
| showTitleBlock |  | boolean | 是否显示明细表 |
| titleBlockData |  | { [key: string]: { showTitle: boolean | 明细表数据 |
| uuid |  | string | 原理图图页 UUID |

接口方法：

- 无

#### IDMT_TeamItem

- 接口签名：export interface IDMT_TeamItem
- 接口描述：团队属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| identity |  | number | 当前用户在团队内的身份（权限组）ID |
| itemType | readonly | EDMT_ItemType. TEAM | 项目类型 |
| name |  | string | 团队名称 |
| uuid |  | string | 团队 UUID |

接口方法：

- 无

#### IDMT_WorkspaceItem

- 接口签名：export interface IDMT_WorkspaceItem
- 接口描述：工作区属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| itemType | readonly | EDMT_ItemType. WORKSPACE | 项目类型 |
| name |  | string | 工作区名称 |
| uuid |  | string | 工作区 UUID |

接口方法：

- 无

### 图元类

- 无

### 类型别名

- 无

### 变量

- 无

## 原理图 & 符号

- 类：28（方法 340）；枚举：6；接口：2（成员 14）；图元类：21（方法 320）；类型别名：0；变量：0

### 类

#### ISCH_PrimitiveArc

- 类签名：export declare class ISCH_PrimitiveArc implements ISCH_Primitive
- 类描述：圆弧图元
- 类备注：

##### done

- 方法签名：done (): Promise < ISCH_PrimitiveArc > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveArc >
- 返回值描述：圆弧图元对象

##### getState_Color

- 方法签名：getState_Color (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：颜色

##### getState_EndX

- 方法签名：getState_EndX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：终止点 X

参数：

- 无

- 返回值类型：number
- 返回值描述：终止点 X

##### getState_EndY

- 方法签名：getState_EndY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：终止点 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：终止点 Y

##### getState_FillColor

- 方法签名：getState_FillColor (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：填充颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：填充颜色

##### getState_LineType

- 方法签名：getState_LineType (): ESCH_PrimitiveLineType | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线型

参数：

- 无

- 返回值类型：ESCH_PrimitiveLineType | null
- 返回值描述：线型

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number | null
- 返回值描述：线宽

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### getState_ReferenceX

- 方法签名：getState_ReferenceX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：参考点 X

参数：

- 无

- 返回值类型：number
- 返回值描述：参考点 X

##### getState_ReferenceY

- 方法签名：getState_ReferenceY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：参考点 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：参考点 Y

##### getState_StartX

- 方法签名：getState_StartX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：起始点 X

参数：

- 无

- 返回值类型：number
- 返回值描述：起始点 X

##### getState_StartY

- 方法签名：getState_StartY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：起始点 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：起始点 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitiveArc > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveArc >
- 返回值描述：圆弧图元对象

##### setState_Color

- 方法签名：setState_Color (color: string | null ): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| color | string \| null | 颜色 |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_EndX

- 方法签名：setState_EndX (endX: number): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| endX | number | 终止点 X |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_EndY

- 方法签名：setState_EndY (endY: number): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| endY | number | 终止点 Y |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_FillColor

- 方法签名：setState_FillColor (fillColor: string | null ): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillColor | string \| null | 填充颜色 |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_LineType

- 方法签名：setState_LineType (lineType: ESCH_PrimitiveLineType | null ): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineType | ESCH_PrimitiveLineType \| null | 线型 |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number | null ): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number \| null | 线宽 |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_ReferenceX

- 方法签名：setState_ReferenceX (referenceX: number): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| referenceX | number | 参考点 X |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_ReferenceY

- 方法签名：setState_ReferenceY (referenceY: number): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| referenceY | number | 参考点 Y |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_StartX

- 方法签名：setState_StartX (startX: number): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startX | number | 起始点 X |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### setState_StartY

- 方法签名：setState_StartY (startY: number): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startY | number | 起始点 Y |

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveArc;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveArc
- 返回值描述：圆弧图元对象

#### ISCH_PrimitiveBus

- 类签名：export declare class ISCH_PrimitiveBus implements ISCH_Primitive
- 类描述：总线图元
- 类备注：

##### done

- 方法签名：done (): Promise < ISCH_PrimitiveBus > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveBus >
- 返回值描述：总线图元对象

##### getState_BusName

- 方法签名：getState_BusName (): string;
- 方法修饰符：
- 方法描述：获取属性状态：总线名称

参数：

- 无

- 返回值类型：string
- 返回值描述：总线名称

##### getState_Color

- 方法签名：getState_Color (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：总线颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：总线颜色

##### getState_Line

- 方法签名：getState_Line (): Array < number > | Array < Array < number >> ;
- 方法修饰符：
- 方法描述：获取属性状态：多段线坐标组

参数：

- 无

- 返回值类型：Array<number> | Array<Array<number>>
- 返回值描述：多段线坐标组

##### getState_LineType

- 方法签名：getState_LineType (): ESCH_PrimitiveLineType | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线型

参数：

- 无

- 返回值类型：ESCH_PrimitiveLineType | null
- 返回值描述：线型

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number | null
- 返回值描述：线宽

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### setState_BusName

- 方法签名：setState_BusName (busName: string): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| busName | string | 总线名称 |

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

##### setState_Color

- 方法签名：setState_Color (color: string | null ): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| color | string \| null | 总线颜色 |

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

##### setState_Line

- 方法签名：setState_Line (line: Array < number > | Array < Array < number >> ): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| line | Array<number> \| Array<Array<number>> | 多段线坐标组 |

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

##### setState_LineType

- 方法签名：setState_LineType (lineType: ESCH_PrimitiveLineType | null ): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineType | ESCH_PrimitiveLineType \| null | 线型 |

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number | null ): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number \| null | 线宽 |

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveBus;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveBus
- 返回值描述：总线图元对象

#### ISCH_PrimitiveCbbSymbolComponent

- 类签名：export declare class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent
- 类描述：复用模块符号图元
- 类备注：

##### getState_Cbb

- 方法签名：getState_Cbb (): { libraryUuid: string; uuid: string; };
- 方法修饰符：
- 方法描述：获取属性状态：关联复用模块

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; }
- 返回值描述：关联复用模块

##### getState_CbbSymbol

- 方法签名：getState_CbbSymbol (): { libraryUuid: string; cbbUuid: string; uuid: string; };
- 方法修饰符：
- 方法描述：获取属性状态：关联复用模块符号

参数：

- 无

- 返回值类型：{ libraryUuid: string; cbbUuid: string; uuid: string; }
- 返回值描述：关联复用模块符号

#### ISCH_PrimitiveCircle

- 类签名：export declare class ISCH_PrimitiveCircle implements ISCH_Primitive
- 类描述：圆图元
- 类备注：

##### done

- 方法签名：done (): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### getState_CenterX

- 方法签名：getState_CenterX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：圆心 X

参数：

- 无

- 返回值类型：number
- 返回值描述：圆心 X

##### getState_CenterY

- 方法签名：getState_CenterY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：圆心 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：圆心 Y

##### getState_Color

- 方法签名：getState_Color (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：颜色

##### getState_FillColor

- 方法签名：getState_FillColor (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：填充颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：填充颜色

##### getState_FillStyle

- 方法签名：getState_FillStyle (): ESCH_PrimitiveFillStyle | null ;
- 方法修饰符：
- 方法描述：获取属性状态：填充样式

参数：

- 无

- 返回值类型：ESCH_PrimitiveFillStyle | null
- 返回值描述：填充样式

##### getState_LineType

- 方法签名：getState_LineType (): ESCH_PrimitiveLineType | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线型

参数：

- 无

- 返回值类型：ESCH_PrimitiveLineType | null
- 返回值描述：线型

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number | null
- 返回值描述：线宽

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### getState_Radius

- 方法签名：getState_Radius (): number;
- 方法修饰符：
- 方法描述：获取属性状态：半径

参数：

- 无

- 返回值类型：number
- 返回值描述：半径

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitiveCircle > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveCircle >
- 返回值描述：圆图元对象

##### setState_CenterX

- 方法签名：setState_CenterX (centerX: number): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| centerX | number | 圆心 X |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_CenterY

- 方法签名：setState_CenterY (centerY: number): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| centerY | number | 圆心 Y |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_Color

- 方法签名：setState_Color (color: string | null ): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| color | string \| null | 颜色 |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_FillColor

- 方法签名：setState_FillColor (fillColor: string | null ): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillColor | string \| null | 填充颜色 |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_FillStyle

- 方法签名：setState_FillStyle (fillStyle: ESCH_PrimitiveFillStyle | null ): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillStyle | ESCH_PrimitiveFillStyle \| null | 填充样式 |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_LineType

- 方法签名：setState_LineType (lineType: ESCH_PrimitiveLineType | null ): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineType | ESCH_PrimitiveLineType \| null | 线型 |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number | null ): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number \| null | 线宽 |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### setState_Radius

- 方法签名：setState_Radius (radius: number): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| radius | number | 半径 |

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveCircle;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveCircle
- 返回值描述：圆图元对象

#### ISCH_PrimitiveComponent

- 类签名：export declare class ISCH_PrimitiveComponent implements ISCH_Primitive
- 类描述：器件图元
- 类备注：

##### done

- 方法签名：done (): Promise < ISCH_PrimitiveComponent > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveComponent >
- 返回值描述：器件图元对象

##### getState_AddIntoBom

- 方法签名：getState_AddIntoBom (): boolean | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：是否加入 BOM

参数：

- 无

- 返回值类型：boolean | undefined
- 返回值描述：是否加入 BOM

##### getState_AddIntoPcb

- 方法签名：getState_AddIntoPcb (): boolean | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：是否转到 PCB

参数：

- 无

- 返回值类型：boolean | undefined
- 返回值描述：是否转到 PCB

##### getState_Component

- 方法签名：getState_Component (): { libraryUuid: string; uuid: string; };
- 方法修饰符：
- 方法描述：获取属性状态：关联库器件

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; }
- 返回值描述：关联库器件

##### getState_ComponentType

- 方法签名：getState_ComponentType (): ESCH_PrimitiveComponentType;
- 方法修饰符：
- 方法描述：获取属性状态：器件类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveComponentType
- 返回值描述：器件类型

##### getState_Designator

- 方法签名：getState_Designator (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：位号

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：位号

##### getState_Footprint

- 方法签名：getState_Footprint (): { libraryUuid: string; uuid: string; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：关联库封装

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; } | undefined
- 返回值描述：关联库封装

##### getState_Manufacturer

- 方法签名：getState_Manufacturer (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：制造商

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：制造商

##### getState_ManufacturerId

- 方法签名：getState_ManufacturerId (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：制造商编号

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：制造商编号

##### getState_Mirror

- 方法签名：getState_Mirror (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否镜像

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否镜像

##### getState_Name

- 方法签名：getState_Name (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：名称

##### getState_Net

- 方法签名：getState_Net (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：网络名称

##### getState_OtherProperty

- 方法签名：getState_OtherProperty (): { [key: string]: string | number | boolean; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：其它参数

参数：

- 无

- 返回值类型：{ [key: string]: string | number | boolean; } | undefined
- 返回值描述：其它参数

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_SubPartName

- 方法签名：getState_SubPartName (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：子图块名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：子图块名称

##### getState_Supplier

- 方法签名：getState_Supplier (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：供应商

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：供应商

##### getState_SupplierId

- 方法签名：getState_SupplierId (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：供应商编号

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：供应商编号

##### getState_Symbol

- 方法签名：getState_Symbol (): { libraryUuid: string; uuid: string; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：关联库符号

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; } | undefined
- 返回值描述：关联库符号

##### getState_UniqueId

- 方法签名：getState_UniqueId (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：唯一 ID

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：唯一 ID

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitiveComponent > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveComponent >
- 返回值描述：器件图元对象

##### setState_AddIntoBom

- 方法签名：setState_AddIntoBom (addIntoBom: boolean | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| addIntoBom | boolean \| undefined | 是否加入 BOM |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_AddIntoPcb

- 方法签名：setState_AddIntoPcb (addIntoPcb: boolean | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| addIntoPcb | boolean \| undefined | 是否转到 PCB |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Designator

- 方法签名：setState_Designator (designator: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| designator | string \| undefined | 位号 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Manufacturer

- 方法签名：setState_Manufacturer (manufacturer: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| manufacturer | string \| undefined | 制造商 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_ManufacturerId

- 方法签名：setState_ManufacturerId (manufacturerId: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| manufacturerId | string \| undefined | 制造商编号 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Mirror

- 方法签名：setState_Mirror (mirror: boolean): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mirror | boolean | 是否镜像 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Name

- 方法签名：setState_Name (name: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| name | string \| undefined | 名称 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Net

- 方法签名：setState_Net (net: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string \| undefined | 网络名称 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_OtherProperty

- 方法签名：setState_OtherProperty (otherProperty: { [key: string]: string | number | boolean; }): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| otherProperty | { [key: string]: string \| number \| boolean; } | 其它参数 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Supplier

- 方法签名：setState_Supplier (supplier: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| supplier | string \| undefined | 供应商 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_SupplierId

- 方法签名：setState_SupplierId (supplierId: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| supplierId | string \| undefined | 供应商编号 |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_UniqueId

- 方法签名：setState_UniqueId (uniqueId: string | undefined ): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uniqueId | string \| undefined | 唯一 ID |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_X

- 方法签名：setState_X (x: number): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 坐标 Y |

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：器件图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：圆弧线图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveComponent;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveComponent
- 返回值描述：圆弧线图元对象

#### ISCH_PrimitiveComponentPin

- 类签名：export declare class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin
- 类描述：器件引脚图元
- 类备注：

##### primitiveType

- 方法签名：primitiveType
- 方法修饰符：protected readonly
- 方法描述：ESCH_PrimitiveType.COMPONENT_PIN

参数：

- 无

- 返回值类型：
- 返回值描述：

#### ISCH_PrimitivePin

- 类签名：export declare class ISCH_PrimitivePin implements ISCH_Primitive
- 类描述：引脚图元
- 类备注：

##### async

- 方法签名：async
- 方法修饰符：protected
- 方法描述：boolean

参数：

- 无

- 返回值类型：
- 返回值描述：

##### done

- 方法签名：done (): Promise < ISCH_PrimitivePin > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitivePin >
- 返回值描述：引脚图元对象

##### getState_OtherProperty

- 方法签名：getState_OtherProperty (): { [key: string]: string | number | boolean; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：其它参数

参数：

- 无

- 返回值类型：{ [key: string]: string | number | boolean; } | undefined
- 返回值描述：其它参数

##### getState_PinColor

- 方法签名：getState_PinColor (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：引脚颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：引脚颜色

##### getState_PinLength

- 方法签名：getState_PinLength (): number;
- 方法修饰符：
- 方法描述：获取属性状态：引脚长度

参数：

- 无

- 返回值类型：number
- 返回值描述：引脚长度

##### getState_PinName

- 方法签名：getState_PinName (): string;
- 方法修饰符：
- 方法描述：获取属性状态：引脚名称

参数：

- 无

- 返回值类型：string
- 返回值描述：引脚名称

##### getState_PinNumber

- 方法签名：getState_PinNumber (): string;
- 方法修饰符：
- 方法描述：获取属性状态：引脚编号

参数：

- 无

- 返回值类型：string
- 返回值描述：引脚编号

##### getState_PinShape

- 方法签名：getState_PinShape (): ESCH_PrimitivePinShape;
- 方法修饰符：
- 方法描述：获取属性状态：引脚形状

参数：

- 无

- 返回值类型：ESCH_PrimitivePinShape
- 返回值描述：引脚形状

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 Y

##### getState_pinType

- 方法签名：getState_pinType (): ESCH_PrimitivePinType;
- 方法修饰符：
- 方法描述：获取属性状态：引脚类型

参数：

- 无

- 返回值类型：ESCH_PrimitivePinType
- 返回值描述：引脚类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### pinColor

- 方法签名：pinColor
- 方法修饰符：protected
- 方法描述：string | null

参数：

- 无

- 返回值类型：
- 返回值描述：

##### pinLength

- 方法签名：pinLength
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### pinName

- 方法签名：pinName
- 方法修饰符：protected
- 方法描述：string

参数：

- 无

- 返回值类型：
- 返回值描述：

##### pinNumber

- 方法签名：pinNumber
- 方法修饰符：protected
- 方法描述：string

参数：

- 无

- 返回值类型：
- 返回值描述：

##### pinShape

- 方法签名：pinShape
- 方法修饰符：protected
- 方法描述：ESCH_PrimitivePinShape

参数：

- 无

- 返回值类型：
- 返回值描述：

##### pinType

- 方法签名：pinType
- 方法修饰符：protected
- 方法描述：ESCH_PrimitivePinType

参数：

- 无

- 返回值类型：
- 返回值描述：

##### primitiveId?

- 方法签名：primitiveId?
- 方法修饰符：protected
- 方法描述：string

参数：

- 无

- 返回值类型：
- 返回值描述：

##### primitiveType

- 方法签名：primitiveType
- 方法修饰符：protected readonly
- 方法描述：ESCH_PrimitiveType

参数：

- 无

- 返回值类型：
- 返回值描述：

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitivePin > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitivePin >
- 返回值描述：引脚图元对象

##### rotation

- 方法签名：rotation
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### setState_OtherProperty

- 方法签名：setState_OtherProperty (otherProperty: { [key: string]: string | number | boolean; }): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| otherProperty | { [key: string]: string \| number \| boolean; } | 其它参数 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_PinColor

- 方法签名：setState_PinColor (pinColor: string | null ): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pinColor | string \| null | 引脚颜色 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_PinLength

- 方法签名：setState_PinLength (pinLength: number): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pinLength | number | 引脚长度 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_PinName

- 方法签名：setState_PinName (pinName: string): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pinName | string | 引脚名称 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_PinNumber

- 方法签名：setState_PinNumber (pinNumber: string): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pinNumber | string | 引脚编号 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_PinShape

- 方法签名：setState_PinShape (pinShape: ESCH_PrimitivePinShape): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pinShape | ESCH_PrimitivePinShape | 引脚形状 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_PinType

- 方法签名：setState_PinType (pinType: ESCH_PrimitivePinType): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pinType | ESCH_PrimitivePinType | 引脚类型 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_X

- 方法签名：setState_X (x: number): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 坐标 Y |

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitivePin;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitivePin
- 返回值描述：引脚图元对象

##### x

- 方法签名：x
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### y

- 方法签名：y
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

#### ISCH_PrimitivePolygon

- 类签名：export declare class ISCH_PrimitivePolygon implements ISCH_Primitive
- 类描述：多边形（折线）图元
- 类备注：

##### done

- 方法签名：done (): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### getState_Color

- 方法签名：getState_Color (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：颜色

##### getState_FillColor

- 方法签名：getState_FillColor (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：填充颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：填充颜色

##### getState_Line

- 方法签名：getState_Line (): Array < number > ;
- 方法修饰符：
- 方法描述：获取属性状态：坐标组

参数：

- 无

- 返回值类型：Array<number>
- 返回值描述：坐标组

##### getState_LineType

- 方法签名：getState_LineType (): ESCH_PrimitiveLineType | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线型

参数：

- 无

- 返回值类型：ESCH_PrimitiveLineType | null
- 返回值描述：线型

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number | null
- 返回值描述：线宽

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitivePolygon > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitivePolygon >
- 返回值描述：多边形图元对象

##### setState_Color

- 方法签名：setState_Color (color: string | null ): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| color | string \| null | 颜色 |

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### setState_FillColor

- 方法签名：setState_FillColor (fillColor: string | null ): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillColor | string \| null | 填充颜色 |

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### setState_Line

- 方法签名：setState_Line (line: Array < number > ): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| line | Array<number> | 坐标组 |

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### setState_LineType

- 方法签名：setState_LineType (lineType: ESCH_PrimitiveLineType | null ): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineType | ESCH_PrimitiveLineType \| null | 线型 |

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number | null ): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number \| null | 线宽 |

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitivePolygon;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitivePolygon
- 返回值描述：多边形图元对象

#### ISCH_PrimitiveRectangle

- 类签名：export declare class ISCH_PrimitiveRectangle implements ISCH_Primitive
- 类描述：矩形图元
- 类备注：

##### done

- 方法签名：done (): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### getState_Color

- 方法签名：getState_Color (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：边框颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：边框颜色

##### getState_CornerRadius

- 方法签名：getState_CornerRadius (): number;
- 方法修饰符：
- 方法描述：获取属性状态：圆角半径

参数：

- 无

- 返回值类型：number
- 返回值描述：圆角半径

##### getState_FillColor

- 方法签名：getState_FillColor (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：填充颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：填充颜色

##### getState_FillStyle

- 方法签名：getState_FillStyle (): ESCH_PrimitiveFillStyle | null ;
- 方法修饰符：
- 方法描述：获取属性状态：填充样式

参数：

- 无

- 返回值类型：ESCH_PrimitiveFillStyle | null
- 返回值描述：填充样式

##### getState_Height

- 方法签名：getState_Height (): number;
- 方法修饰符：
- 方法描述：获取属性状态：高

参数：

- 无

- 返回值类型：number
- 返回值描述：高

##### getState_LineType

- 方法签名：getState_LineType (): ESCH_PrimitiveLineType | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线型

参数：

- 无

- 返回值类型：ESCH_PrimitiveLineType | null
- 返回值描述：线型

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number | null
- 返回值描述：线宽

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_TopLeftX

- 方法签名：getState_TopLeftX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：左上点 X

参数：

- 无

- 返回值类型：number
- 返回值描述：左上点 X

##### getState_TopLeftY

- 方法签名：getState_TopLeftY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：左上点 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：左上点 Y

##### getState_Width

- 方法签名：getState_Width (): number;
- 方法修饰符：
- 方法描述：获取属性状态：宽

参数：

- 无

- 返回值类型：number
- 返回值描述：宽

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitiveRectangle > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveRectangle >
- 返回值描述：矩形图元对象

##### setState_Color

- 方法签名：setState_Color (color: string | null ): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| color | string \| null | 边框颜色 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_CornerRadius

- 方法签名：setState_CornerRadius (cornerRadius: number): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cornerRadius | number | 圆角半径 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_FillColor

- 方法签名：setState_FillColor (fillColor: string | null ): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillColor | string \| null | 填充颜色 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_FillStyle

- 方法签名：setState_FillStyle (fillStyle: ESCH_PrimitiveFillStyle | null ): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillStyle | ESCH_PrimitiveFillStyle \| null | 填充样式 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_Height

- 方法签名：setState_Height (height: number): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| height | number | 高 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_LineType

- 方法签名：setState_LineType (lineType: ESCH_PrimitiveLineType | null ): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineType | ESCH_PrimitiveLineType \| null | 线型 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number | null ): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number \| null | 线宽 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_TopLeftX

- 方法签名：setState_TopLeftX (topLeftX: number): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topLeftX | number | 左上点 X |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_TopLeftY

- 方法签名：setState_TopLeftY (topLeftY: number): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topLeftY | number | 左上点 Y |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### setState_Width

- 方法签名：setState_Width (width: number): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| width | number | 宽 |

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveRectangle;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveRectangle
- 返回值描述：矩形图元对象

#### ISCH_PrimitiveText

- 类签名：export declare class ISCH_PrimitiveText implements ISCH_Primitive
- 类描述：文本图元
- 类备注：

##### done

- 方法签名：done (): Promise < ISCH_PrimitiveText > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveText >
- 返回值描述：文本图元对象

##### getState_AlignMode

- 方法签名：getState_AlignMode (): number;
- 方法修饰符：
- 方法描述：获取属性状态：对齐模式

参数：

- 无

- 返回值类型：number
- 返回值描述：对齐模式

##### getState_Bold

- 方法签名：getState_Bold (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否加粗

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否加粗

##### getState_Content

- 方法签名：getState_Content (): string;
- 方法修饰符：
- 方法描述：获取属性状态：文本内容

参数：

- 无

- 返回值类型：string
- 返回值描述：文本内容

##### getState_FontName

- 方法签名：getState_FontName (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：字体名称

参数：

- 无

- 返回值类型：string | null
- 返回值描述：字体名称

##### getState_FontSize

- 方法签名：getState_FontSize (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：字体大小

参数：

- 无

- 返回值类型：number | null
- 返回值描述：字体大小

##### getState_Italic

- 方法签名：getState_Italic (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否斜体

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否斜体

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_TextColor

- 方法签名：getState_TextColor (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：文本颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：文本颜色

##### getState_UnderLine

- 方法签名：getState_UnderLine (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否加下划线

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否加下划线

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < ISCH_PrimitiveText > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveText >
- 返回值描述：文本图元对象

##### setState_AlignMode

- 方法签名：setState_AlignMode (alignMode: number): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| alignMode | number | 对齐模式 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_Bold

- 方法签名：setState_Bold (bold: boolean): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| bold | boolean | 是否加粗 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_Content

- 方法签名：setState_Content (content: string): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| content | string | 文本内容 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_FontName

- 方法签名：setState_FontName (fontName: string | null ): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fontName | string \| null | 字体名称 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_FontSize

- 方法签名：setState_FontSize (fontSize: number | null ): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fontSize | number \| null | 字体大小 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_Italic

- 方法签名：setState_Italic (italic: boolean): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| italic | boolean | 是否斜体 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_TextColor

- 方法签名：setState_TextColor (textColor: string | null ): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| textColor | string \| null | 文本颜色 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_UnderLine

- 方法签名：setState_UnderLine (underLine: boolean): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| underLine | boolean | 是否加下划线 |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_X

- 方法签名：setState_X (x: number): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 坐标 Y |

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveText;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveText
- 返回值描述：文本图元对象

#### ISCH_PrimitiveWire

- 类签名：export declare class ISCH_PrimitiveWire implements ISCH_Primitive
- 类描述：导线图元
- 类备注：

##### done

- 方法签名：done (): Promise < ISCH_PrimitiveWire > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< ISCH_PrimitiveWire >
- 返回值描述：导线图元对象

##### getState_Color

- 方法签名：getState_Color (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：总线颜色

参数：

- 无

- 返回值类型：string | null
- 返回值描述：总线颜色

##### getState_Line

- 方法签名：getState_Line (): Array < number > | Array < Array < number >> ;
- 方法修饰符：
- 方法描述：获取属性状态：多段线坐标组

参数：

- 无

- 返回值类型：Array<number> | Array<Array<number>>
- 返回值描述：多段线坐标组

##### getState_LineType

- 方法签名：getState_LineType (): ESCH_PrimitiveLineType | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线型

参数：

- 无

- 返回值类型：ESCH_PrimitiveLineType | null
- 返回值描述：线型

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number | null ;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number | null
- 返回值描述：线宽

##### getState_Net

- 方法签名：getState_Net (): string;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string
- 返回值描述：网络名称

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): ESCH_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：ESCH_PrimitiveType
- 返回值描述：图元类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### setState_Color

- 方法签名：setState_Color (color: string | null ): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| color | string \| null | 导线颜色 |

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

##### setState_Line

- 方法签名：setState_Line (line: Array < number > | Array < Array < number >> ): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| line | Array<number> \| Array<Array<number>> | 多段线坐标组 |

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

##### setState_LineType

- 方法签名：setState_LineType (lineType: ESCH_PrimitiveLineType | null ): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineType | ESCH_PrimitiveLineType \| null | 线型 |

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number | null ): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number \| null | 线宽 |

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

##### toAsync

- 方法签名：toAsync (): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

##### toSync

- 方法签名：toSync (): ISCH_PrimitiveWire;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：ISCH_PrimitiveWire
- 返回值描述：导线图元对象

#### SCH_Document

- 类签名：export declare class SCH_Document
- 类描述：原理图 & 符号 / 文档操作类
- 类备注：

##### importChanges

- 方法签名：importChanges (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：从 PCB 导入变更

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：导入操作是否成功，导入失败或游离原理图返回 false

##### save

- 方法签名：save (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：保存文档

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：保存操作是否成功，保存失败、上传失败等错误均返回 false

#### SCH_Drc

- 类签名：export declare class SCH_Drc
- 类描述：原理图 & 符号 / 设计规则检查（DRC）类
- 类备注：

##### check

- 方法签名：check (strict ?: boolean, userInterface ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：检查 DRC

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| strict | boolean | (Optional) 是否严格检查，严格检查时存在 Warning 将返回 false ，否则返回 true |
| userInterface | boolean | (Optional) 是否显示 UI（呼出底部 DRC 窗口） |

- 返回值类型：Promise<boolean>
- 返回值描述：DRC 检查是否无错误

#### SCH_Event

- 类签名：export declare class SCH_Event
- 类描述：原理图 & 符号 / 事件类
- 类备注：

##### addMouseEventListener

- 方法签名：addMouseEventListener (id: string, eventType: 'all' | 'selected' | 'clearSelected' , callFn: ( eventType : 'selected' | 'clearSelected' ) => void | Promise <void> , onlyOnce ?: boolean): void ;
- 方法修饰符：
- 方法描述：新增鼠标事件监听

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 事件 ID，用以防止重复注册事件 |
| eventType | 'all' \| 'selected' \| 'clearSelected' | 事件类型 |
| callFn | (eventType: 'selected' \| 'clearSelected') => void \| Promise<void> | 事件触发时的回调函数 |
| onlyOnce | boolean | (Optional) 是否仅监听一次 |

- 返回值类型：void
- 返回值描述：

##### isEventListenerAlreadyExist

- 方法签名：isEventListenerAlreadyExist (id: string): boolean;
- 方法修饰符：
- 方法描述：查询事件监听是否存在

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 事件 ID |

- 返回值类型：boolean
- 返回值描述：事件监听是否存在

##### removeEventListener

- 方法签名：removeEventListener (id: string): boolean;
- 方法修饰符：
- 方法描述：移除事件监听

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 事件 ID |

- 返回值类型：boolean
- 返回值描述：是否移除指定事件监听

#### SCH_ManufactureData

- 类签名：export declare class SCH_ManufactureData
- 类描述：原理图 & 符号 / 生产资料类
- 类备注：

##### getBomFile

- 方法签名：getBomFile (fileName ?: string, fileType ?: 'xlsx' | 'csv' , template ?: string, filterOptions ?: Array <{ property : string ; includeValue : boolean | string ; }>, statistics ?: Array < string > , property ?: Array < string > , columns ?: Array < IPCB_BomPropertiesTableColumns > ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| fileType | 'xlsx' \| 'csv' | (Optional) 文件类型 |
| template | string | (Optional) 模板名称 |
| filterOptions | Array<{ property: string; includeValue: boolean \| string; }> | (Optional) 过滤规则，仅应包含需要启用的规则， property 为规则名称， includeValue 为匹配的值 |
| statistics | Array<string> | (Optional) 统计，包含所有需要启用的统计项的名称 |
| property | Array<string> | (Optional) 属性，包含所有需要启用的属性的名称 |
| columns | Array< IPCB_BomPropertiesTableColumns > | (Optional) 列的属性及排序， title 、 sort 、 group 、 orderWeight 不传入则取默认值， null 代表 **无** 或 **空** |

- 返回值类型：Promise<File | undefined>
- 返回值描述：BOM 文件数据

##### getNetlistFile

- 方法签名：getNetlistFile (fileName ?: string, netlistType ?: ESYS_NetlistType): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| netlistType | ESYS_NetlistType | (Optional) 网表类型 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：网表文件数据

##### placeComponentsOrder

- 方法签名：placeComponentsOrder (interactive ?: boolean, ignoreWarning ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactive | boolean | (Optional) 是否启用交互式检查 如若启用，则会存在弹窗等待用户进行交互，且无法使用 ignoreWarning 参数忽略警告， 即 ignoreWarning 参数将被忽略； 如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 true 并在新标签页打开下单页面 |
| ignoreWarning | boolean | (Optional) 在非交互式检查时忽略警告 如果设置为 true ，将会忽略所有检查警告项并尽可能生成下单资料； 如果设置为 false ，存在任意警告将中断执行并返回 false 的结果 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否通过下单检查

##### placeSmtComponentsOrder

- 方法签名：placeSmtComponentsOrder (interactive ?: boolean, ignoreWarning ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactive | boolean | (Optional) 是否启用交互式检查 如若启用，则会存在弹窗等待用户进行交互，且无法使用 ignoreWarning 参数忽略警告， 即 ignoreWarning 参数将被忽略； 如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 true 并在新标签页打开下单页面 |
| ignoreWarning | boolean | (Optional) 在非交互式检查时忽略警告 如果设置为 true ，将会忽略所有检查警告项并尽可能生成下单资料； 如果设置为 false ，存在任意警告将中断执行并返回 false 的结果 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否通过下单检查

#### SCH_Netlist

- 类签名：export declare class SCH_Netlist
- 类描述：原理图 & 符号 / 网表类
- 类备注：

##### getNetlist

- 方法签名：getNetlist (type ?: ESYS_NetlistType): Promise < string > ;
- 方法修饰符：
- 方法描述：获取网表

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| type | ESYS_NetlistType | (Optional) 网表格式 |

- 返回值类型：Promise<string>
- 返回值描述：网表数据

##### setNetlist

- 方法签名：setNetlist (type: ESYS_NetlistType | undefined , netlist: string): Promise <void> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| type | ESYS_NetlistType \| undefined | 网表格式 |
| netlist | string | 网表数据 |

- 返回值类型：Promise<void>
- 返回值描述：

#### SCH_Primitive

- 类签名：export declare class SCH_Primitive
- 类描述：原理图 & 符号 / 图元类
- 类备注：

##### getPrimitiveByPrimitiveId

- 方法签名：getPrimitiveByPrimitiveId (id: string): Promise < ISCH_Primitive | undefined > ;
- 方法修饰符：
- 方法描述：获取指定 ID 的图元的所有属性

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 图元 ID |

- 返回值类型：Promise< ISCH_Primitive | undefined>
- 返回值描述：图元的所有属性

##### getPrimitiveTypeByPrimitiveId

- 方法签名：getPrimitiveTypeByPrimitiveId (id: string): Promise < ESCH_PrimitiveType | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 图元 ID |

- 返回值类型：Promise< ESCH_PrimitiveType | undefined>
- 返回值描述：图元类型

##### getPrimitivesBBox

- 方法签名：getPrimitivesBBox (primitiveIds: Array < string | ISCH_Primitive > ): Promise <{ minX : number ; minY : number ; maxX : number ; maxY : number ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string \| ISCH_Primitive > | 图元 ID 数组或图元对象数组 |

- 返回值类型：Promise<{ minX: number; minY: number; maxX: number; maxY: number; } | undefined>
- 返回值描述：图元的 BBox，如若图元不存在或没有 BBox，将会返回 undefined 的结果

#### SCH_PrimitiveArc

- 类签名：export declare class SCH_PrimitiveArc implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 圆弧图元类
- 类备注：

##### create

- 方法签名：create (startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color ?: string | null , fillColor ?: string | null , lineWidth ?: number | null , lineType ?: ESCH_PrimitiveLineType | null ): Promise < ISCH_PrimitiveArc | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startX | number | 起始点 X |
| startY | number | 起始点 Y |
| referenceX | number | 参考点 X |
| referenceY | number | 参考点 Y |
| endX | number | 终止点 X |
| endY | number | 终止点 Y |
| color | string \| null | (Optional) 颜色， null 表示默认 |
| fillColor | string \| null | (Optional) 填充颜色， none 表示无填充， null 表示默认 |
| lineWidth | number \| null | (Optional) 线宽，范围 1-10 ， null 表示默认 |
| lineType | ESCH_PrimitiveLineType \| null | (Optional) 线型， null 表示默认 |

- 返回值类型：Promise< ISCH_PrimitiveArc | undefined>
- 返回值描述：圆弧图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveArc | Array < string > | Array < ISCH_PrimitiveArc >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveArc \| Array<string> \| Array< ISCH_PrimitiveArc > | 圆弧的图元 ID 或圆弧图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveArc | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 圆弧的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveArc | undefined>
- 返回值描述：圆弧图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 圆弧的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveArc >>
- 返回值描述：圆弧图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitiveArc >>
- 返回值描述：圆弧图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：圆弧的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveArc, property: { startX?: number; startY ?: number; referenceX ?: number; referenceY ?: number; endX ?: number; endY ?: number; color ?: string | null ; fillColor ?: string | null ; lineWidth ?: number | null ; lineType ?: ESCH_PrimitiveLineType | null ; }): Promise < ISCH_PrimitiveArc | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveArc | 图元 ID |
| property | { startX?: number; startY?: number; referenceX?: number; referenceY?: number; endX?: number; endY?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: ESCH_PrimitiveLineType \| null; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitiveArc | undefined>
- 返回值描述：圆弧图元对象

#### SCH_PrimitiveBus

- 类签名：export declare class SCH_PrimitiveBus implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 总线图元类
- 类备注：

##### create

- 方法签名：create (busName: string, line: Array < number > | Array < Array < number >> , color ?: string | null , lineWidth ?: number | null , lineType ?: ESCH_PrimitiveLineType | null ): Promise < ISCH_PrimitiveBus | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| busName | string | 总线名称 |
| line | Array<number> \| Array<Array<number>> | 多段线坐标组，每段都是连续的一组 [x1, y1, x2, y2, x3, y3] 所描述的线，如若多段线彼此无任何连接则创建将会失败 |
| color | string \| null | (Optional) 总线颜色， null 表示默认 |
| lineWidth | number \| null | (Optional) 线宽，范围 1-10 ， null 表示默认 |
| lineType | ESCH_PrimitiveLineType \| null | (Optional) 线型， null 表示默认 |

- 返回值类型：Promise< ISCH_PrimitiveBus | undefined>
- 返回值描述：总线图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveBus | Array < string > | Array < ISCH_PrimitiveBus >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveBus \| Array<string> \| Array< ISCH_PrimitiveBus > | 总线的图元 ID 或总线图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveBus | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveBus | undefined>
- 返回值描述：总线图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveBus >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveBus >>
- 返回值描述：总线图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitiveBus >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitiveBus >>
- 返回值描述：总线图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：总线的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveBus, property: { busName?: string; line ?: Array < number > | Array < Array < number >> ; color ?: string | null ; lineWidth ?: number | null ; lineType ?: ESCH_PrimitiveLineType | null ; }): Promise < ISCH_PrimitiveBus | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveBus | 总线的图元 ID 或总线图元对象 |
| property | { busName?: string; line?: Array<number> \| Array<Array<number>>; color?: string \| null; lineWidth?: number \| null; lineType?: ESCH_PrimitiveLineType \| null; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitiveBus | undefined>
- 返回值描述：总线图元对象

#### SCH_PrimitiveCircle

- 类签名：export declare class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 圆图元类
- 类备注：

##### create

- 方法签名：create (centerX: number, centerY: number, radius: number, color ?: string | null , fillColor ?: string | null , lineWidth ?: number | null , lineType ?: ESCH_PrimitiveLineType | null , fillStyle ?: ESCH_PrimitiveFillStyle | null ): Promise < ISCH_PrimitiveCircle > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| centerX | number | 圆心 X |
| centerY | number | 圆心 Y |
| radius | number | 半径 |
| color | string \| null | (Optional) 颜色， null 表示默认 |
| fillColor | string \| null | (Optional) 填充颜色， none 表示无填充， null 表示默认 |
| lineWidth | number \| null | (Optional) 线宽，范围 1-10 ， null 表示默认 |
| lineType | ESCH_PrimitiveLineType \| null | (Optional) 线型， null 表示默认 |
| fillStyle | ESCH_PrimitiveFillStyle \| null | (Optional) 填充样式， null 表示默认 |

- 返回值类型：Promise< ISCH_PrimitiveCircle >
- 返回值描述：圆图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveCircle | Array < string > | Array < ISCH_PrimitiveCircle >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveCircle \| Array<string> \| Array< ISCH_PrimitiveCircle > | 圆的图元 ID 或圆图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveCircle | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 圆的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveCircle | undefined>
- 返回值描述：圆图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveCircle >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 圆的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveCircle >>
- 返回值描述：圆图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitiveCircle >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitiveCircle >>
- 返回值描述：圆图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：圆的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveCircle, property: { centerX?: number; centerY ?: number; radius ?: number; color ?: string | null ; fillColor ?: string | null ; lineWidth ?: number | null ; lineType ?: ESCH_PrimitiveLineType | null ; fillStyle ?: ESCH_PrimitiveFillStyle | null ; }): Promise < ISCH_PrimitiveCircle | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveCircle | 图元 ID |
| property | { centerX?: number; centerY?: number; radius?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: ESCH_PrimitiveLineType \| null; fillStyle?: ESCH_PrimitiveFillStyle \| null; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitiveCircle | undefined>
- 返回值描述：圆图元对象

#### SCH_PrimitiveComponent

- 类签名：export declare class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 器件图元类
- 类备注：

##### create

- 方法签名：create (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem, x: number, y: number, subPartName ?: string, rotation ?: number, mirror ?: boolean, addIntoBom ?: boolean, addIntoPcb ?: boolean): Promise < ISCH_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |
| x | number | 坐标 X |
| y | number | 坐标 Y |
| subPartName | string | (Optional) 子图块名称 |
| rotation | number | (Optional) 旋转角度 |
| mirror | boolean | (Optional) 是否镜像 |
| addIntoBom | boolean | (Optional) 是否加入 BOM |
| addIntoPcb | boolean | (Optional) 是否转到 PCB |

- 返回值类型：Promise< ISCH_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

##### createNetFlag

- 方法签名：createNetFlag (identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround' , net: string, x: number, y: number, rotation ?: number, mirror ?: boolean): Promise < ISCH_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| identification | 'Power' \| 'Ground' \| 'AnalogGround' \| 'ProtectGround' | 标识类型 |
| net | string | 网络名称 |
| x | number | 坐标 X |
| y | number | 坐标 Y |
| rotation | number | (Optional) 旋转角度 |
| mirror | boolean | (Optional) 是否镜像 |

- 返回值类型：Promise< ISCH_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

##### createNetPort

- 方法签名：createNetPort (direction: 'IN' | 'OUT' | 'BI' , net: string, x: number, y: number, rotation ?: number, mirror ?: boolean): Promise < ISCH_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| direction | 'IN' \| 'OUT' \| 'BI' | 端口方向 |
| net | string | 网络名称 |
| x | number | 坐标 X |
| y | number | 坐标 Y |
| rotation | number | (Optional) 旋转角度 |
| mirror | boolean | (Optional) 是否镜像 |

- 返回值类型：Promise< ISCH_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

##### createShortCircuitFlag

- 方法签名：createShortCircuitFlag (x: number, y: number, rotation ?: number, mirror ?: boolean): Promise < ISCH_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |
| y | number | 坐标 Y |
| rotation | number | (Optional) 旋转角度 |
| mirror | boolean | (Optional) 是否镜像 |

- 返回值类型：Promise< ISCH_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveComponent | Array < string > | Array < ISCH_PrimitiveComponent >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveComponent \| Array<string> \| Array< ISCH_PrimitiveComponent > | 器件的图元 ID 或器件图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveComponent >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveComponent >>
- 返回值描述：器件图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (componentType ?: ESCH_PrimitiveComponentType, allSchematicPages ?: boolean): Promise < Array < ISCH_PrimitiveComponent >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| componentType | ESCH_PrimitiveComponentType | (Optional) 器件类型 |
| allSchematicPages | boolean | (Optional) 是否获取所有原理图图页的器件 |

- 返回值类型：Promise<Array< ISCH_PrimitiveComponent >>
- 返回值描述：器件图元对象数组

##### getAllPinsByPrimitiveId

- 方法签名：getAllPinsByPrimitiveId (primitiveId: string): Promise < Array < ISCH_PrimitiveComponentPin > | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string | 器件图元 ID |

- 返回值类型：Promise<Array< ISCH_PrimitiveComponentPin > | undefined>
- 返回值描述：器件引脚图元数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (componentType ?: ESCH_PrimitiveComponentType, allSchematicPages ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| componentType | ESCH_PrimitiveComponentType | (Optional) 器件类型 |
| allSchematicPages | boolean | (Optional) 是否获取所有原理图图页的器件 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：器件的图元 ID 数组

##### getAllPropertyNames

- 方法签名：getAllPropertyNames (): Promise < string[] > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string[]>
- 返回值描述：所有器件的所有属性名称集合

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveComponent, property: { x?: number; y ?: number; rotation ?: number; mirror ?: boolean; addIntoBom ?: boolean; addIntoPcb ?: boolean; designator ?: string | null ; name ?: string | null ; uniqueId ?: string | null ; manufacturer ?: string | null ; manufacturerId ?: string | null ; supplier ?: string | null ; supplierId ?: string | null ; otherProperty ?: { [key: string]: string | number | boolean; }; }): Promise < ISCH_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveComponent | 图元 ID |
| property | { x?: number; y?: number; rotation?: number; mirror?: boolean; addIntoBom?: boolean; addIntoPcb?: boolean; designator?: string \| null; name?: string \| null; uniqueId?: string \| null; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: { [key: string]: string \| number \| boolean; }; } |  |

- 返回值类型：Promise< ISCH_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

##### placeComponentWithMouse

- 方法签名：placeComponentWithMouse (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem, subPartName ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem | 关联库器件 |
| subPartName | string | (Optional) |

- 返回值类型：Promise<boolean>
- 返回值描述：是否找到器件

##### setNetFlagComponentUuid_AnalogGround

- 方法签名：setNetFlagComponentUuid_AnalogGround (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetFlagComponentUuid_Ground

- 方法签名：setNetFlagComponentUuid_Ground (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetFlagComponentUuid_Power

- 方法签名：setNetFlagComponentUuid_Power (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetFlagComponentUuid_ProtectGround

- 方法签名：setNetFlagComponentUuid_ProtectGround (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetPortComponentUuid_BI

- 方法签名：setNetPortComponentUuid_BI (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetPortComponentUuid_IN

- 方法签名：setNetPortComponentUuid_IN (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetPortComponentUuid_OUT

- 方法签名：setNetPortComponentUuid_OUT (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem \| ILIB_DeviceSearchItem | 关联库器件 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### SCH_PrimitivePin

- 类签名：export declare class SCH_PrimitivePin implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 引脚图元类
- 类备注：

##### create

- 方法签名：create (x: number, y: number, pinNumber: string, pinName ?: string, rotation ?: number, pinLength ?: number, pinColor ?: string | null , pinShape ?: ESCH_PrimitivePinShape, pinType ?: ESCH_PrimitivePinType): Promise < ISCH_PrimitivePin | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |
| y | number | 坐标 Y |
| pinNumber | string | 引脚编号 |
| pinName | string | (Optional) 引脚名称 |
| rotation | number | (Optional) 旋转角度，可选 0 90 180 270 |
| pinLength | number | (Optional) 引脚长度 |
| pinColor | string \| null | (Optional) 引脚颜色， null 表示默认 |
| pinShape | ESCH_PrimitivePinShape | (Optional) 引脚形状 |
| pinType | ESCH_PrimitivePinType | (Optional) 引脚类型 |

- 返回值类型：Promise< ISCH_PrimitivePin | undefined>
- 返回值描述：引脚图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitivePin | Array < string > | Array < ISCH_PrimitivePin >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitivePin \| Array<string> \| Array< ISCH_PrimitivePin > | 引脚的图元 ID 或引脚图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitivePin | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 引脚的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitivePin | undefined>
- 返回值描述：引脚图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitivePin >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 引脚的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitivePin >>
- 返回值描述：引脚图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitivePin >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitivePin >>
- 返回值描述：引脚图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：引脚的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitivePin, property: { x?: number; y ?: number; pinNumber ?: string; pinName ?: string; rotation ?: number; pinLength ?: number; pinColor ?: string | null ; pinShape ?: ESCH_PrimitivePinShape; pinType ?: ESCH_PrimitivePinType; }): Promise < ISCH_PrimitivePin | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitivePin | 图元 ID |
| property | { x?: number; y?: number; pinNumber?: string; pinName?: string; rotation?: number; pinLength?: number; pinColor?: string \| null; pinShape?: ESCH_PrimitivePinShape ; pinType?: ESCH_PrimitivePinType ; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitivePin | undefined>
- 返回值描述：引脚图元对象

#### SCH_PrimitivePolygon

- 类签名：export declare class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 多边形（折线）图元类
- 类备注：

##### create

- 方法签名：create (line: Array < number > , color ?: string | null , fillColor ?: string | null , lineWidth ?: number | null , lineType ?: ESCH_PrimitiveLineType | null ): Promise < ISCH_PrimitivePolygon | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| line | Array<number> | 坐标组，连续的一组 [x1, y1, x2, y2, x3, y3] 所描述的线 |
| color | string \| null | (Optional) 颜色， null 表示默认 |
| fillColor | string \| null | (Optional) 填充颜色， none 表示无填充， null 表示默认 |
| lineWidth | number \| null | (Optional) 线宽，范围 1-10 ， null 表示默认 |
| lineType | ESCH_PrimitiveLineType \| null | (Optional) 线型， null 表示默认 |

- 返回值类型：Promise< ISCH_PrimitivePolygon | undefined>
- 返回值描述：多边形图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitivePolygon | Array < string > | Array < ISCH_PrimitivePolygon >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitivePolygon \| Array<string> \| Array< ISCH_PrimitivePolygon > | 多边形的图元 ID 或多边形图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitivePolygon | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 多边形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitivePolygon | undefined>
- 返回值描述：多边形图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitivePolygon >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 多边形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitivePolygon >>
- 返回值描述：多边形图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitivePolygon >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitivePolygon >>
- 返回值描述：多边形图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：多边形的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitivePolygon, property: { line?: Array < number > ; color ?: string | null ; fillColor ?: string | null ; lineWidth ?: number | null ; lineType ?: ESCH_PrimitiveLineType | null ; }): Promise < ISCH_PrimitivePolygon | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitivePolygon | 图元 ID |
| property | { line?: Array<number>; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: ESCH_PrimitiveLineType \| null; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitivePolygon | undefined>
- 返回值描述：多边形图元对象

#### SCH_PrimitiveRectangle

- 类签名：export declare class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 矩形图元类
- 类备注：

##### create

- 方法签名：create (topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius ?: number, rotation ?: number, color ?: string | null , fillColor ?: string | null , lineWidth ?: number | null , lineType ?: ESCH_PrimitiveLineType | null , fillStyle ?: ESCH_PrimitiveFillStyle | null ): Promise < ISCH_PrimitiveRectangle | undefined > ;
- 方法修饰符：
- 方法描述：创建矩形

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topLeftX | number | 左上点 X |
| topLeftY | number | 左上点 Y |
| width | number | 宽 |
| height | number | 高 |
| cornerRadius | number | (Optional) 圆角半径 |
| rotation | number | (Optional) 旋转角度，绕左上点旋转，可选 0 90 180 270 |
| color | string \| null | (Optional) 颜色， null 表示默认 |
| fillColor | string \| null | (Optional) 填充颜色， none 表示无填充， null 表示默认 |
| lineWidth | number \| null | (Optional) 线宽，范围 1-10 ， null 表示默认 |
| lineType | ESCH_PrimitiveLineType \| null | (Optional) 线型， null 表示默认 |
| fillStyle | ESCH_PrimitiveFillStyle \| null | (Optional) 填充样式， null 表示默认 |

- 返回值类型：Promise< ISCH_PrimitiveRectangle | undefined>
- 返回值描述：矩形图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveRectangle | Array < string > | Array < ISCH_PrimitiveRectangle >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：删除矩形

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveRectangle \| Array<string> \| Array< ISCH_PrimitiveRectangle > | 矩形的图元 ID 或矩形图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveRectangle | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 矩形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveRectangle | undefined>
- 返回值描述：矩形图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveRectangle >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 矩形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveRectangle >>
- 返回值描述：矩形图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitiveRectangle >> ;
- 方法修饰符：
- 方法描述：获取所有矩形

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitiveRectangle >>
- 返回值描述：矩形图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：获取所有矩形的图元 ID

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：矩形的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveRectangle, property: { topLeftX?: number; topLeftY ?: number; width ?: number; height ?: number; cornerRadius ?: number; rotation ?: number; color ?: string | null ; fillColor ?: string | null ; lineWidth ?: number | null ; lineType ?: ESCH_PrimitiveLineType | null ; fillStyle ?: ESCH_PrimitiveFillStyle | null ; }): Promise < ISCH_PrimitiveRectangle | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveRectangle | 图元 ID |
| property | { topLeftX?: number; topLeftY?: number; width?: number; height?: number; cornerRadius?: number; rotation?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: ESCH_PrimitiveLineType \| null; fillStyle?: ESCH_PrimitiveFillStyle \| null; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitiveRectangle | undefined>
- 返回值描述：矩形图元对象

#### SCH_PrimitiveText

- 类签名：export declare class SCH_PrimitiveText implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 文本图元类
- 类备注：

##### create

- 方法签名：create (x: number, y: number, content: string, rotation ?: number, textColor ?: string | null , fontName ?: string | null , fontSize ?: number | null , bold ?: boolean, italic ?: boolean, underLine ?: boolean, alignMode ?: number): Promise < ISCH_PrimitiveText | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |
| y | number | 坐标 Y |
| content | string | 文本内容 |
| rotation | number | (Optional) 旋转角度，可选 0 90 180 270 |
| textColor | string \| null | (Optional) 文本颜色， null 表示默认 |
| fontName | string \| null | (Optional) 字体名称， null 表示默认 |
| fontSize | number \| null | (Optional) 字体大小， null 表示默认 |
| bold | boolean | (Optional) 是否加粗 |
| italic | boolean | (Optional) 是否斜体 |
| underLine | boolean | (Optional) 是否加下划线 |
| alignMode | number | (Optional) 对齐模式， 0 左顶， 1 中顶， 2 右顶， 3 左中， 4 中中， 5 右中， 6 左底， 7 中底， 8 右底 |

- 返回值类型：Promise< ISCH_PrimitiveText | undefined>
- 返回值描述：文本图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveText | Array < string > | Array < ISCH_PrimitiveText >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveText \| Array<string> \| Array< ISCH_PrimitiveText > | 文本的图元 ID 或文本图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveText | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveText | undefined>
- 返回值描述：文本图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveText >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveText >>
- 返回值描述：文本图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (): Promise < Array < ISCH_PrimitiveText >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_PrimitiveText >>
- 返回值描述：文本图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：文本的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveText, property: { x?: number; y ?: number; content ?: string; rotation ?: number; textColor ?: string | null ; fontName ?: string | null ; fontSize ?: number | null ; bold ?: boolean; italic ?: boolean; underLine ?: boolean; alignMode ?: number; }): Promise < ISCH_PrimitiveText | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveText | 图元 ID |
| property | { x?: number; y?: number; content?: string; rotation?: number; textColor?: string \| null; fontName?: string \| null; fontSize?: number \| null; bold?: boolean; italic?: boolean; underLine?: boolean; alignMode?: number; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitiveText | undefined>
- 返回值描述：文本图元对象

#### SCH_PrimitiveWire

- 类签名：export declare class SCH_PrimitiveWire implements ISCH_PrimitiveAPI
- 类描述：原理图 & 符号 / 导线图元类
- 类备注：

##### create

- 方法签名：create (line: Array < number > | Array < Array < number >> , net ?: string, color ?: string | null , lineWidth ?: number | null , lineType ?: ESCH_PrimitiveLineType | null ): Promise < ISCH_PrimitiveWire | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| line | Array<number> \| Array<Array<number>> | 多段线坐标组，每段都是连续的一组 [x1, y1, x2, y2, x3, y3] 所描述的线，如若多段线彼此无任何连接则创建将会失败 |
| net | string | (Optional) 网络名称，如若未指定，则遵循： 1. 没有坐标落在任何图元上，则默认为空网络； 2. 有一个坐标点在某个网络的图元上，则跟随该图元的网络； 3. 有多个坐标点在多个不同网络的图元上，则创建失败 如若已指定，则遵循： 1. 有一个或多个坐标点在其他网络的图元上，且其他图元并未显式（通常指的是包含网络标签或网络端口）指定网络，则其他图元跟随指定的网络； 2. 如若其他图元指定了网络，则创建失败 |
| color | string \| null | (Optional) 导线颜色， null 表示默认 |
| lineWidth | number \| null | (Optional) 线宽，范围 1-10 ， null 表示默认 |
| lineType | ESCH_PrimitiveLineType \| null | (Optional) 线型， null 表示默认 |

- 返回值类型：Promise< ISCH_PrimitiveWire | undefined>
- 返回值描述：导线图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | ISCH_PrimitiveWire | Array < string > | Array < ISCH_PrimitiveWire >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| ISCH_PrimitiveWire \| Array<string> \| Array< ISCH_PrimitiveWire > | 导线的图元 ID 或导线图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < ISCH_PrimitiveWire | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< ISCH_PrimitiveWire | undefined>
- 返回值描述：导线图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < ISCH_PrimitiveWire >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< ISCH_PrimitiveWire >>
- 返回值描述：导线图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (net ?: string | Array < string > ): Promise < Array < ISCH_PrimitiveWire >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string \| Array<string> | (Optional) 网络名称 |

- 返回值类型：Promise<Array< ISCH_PrimitiveWire >>
- 返回值描述：导线图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (net ?: string | Array < string > ): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string \| Array<string> | (Optional) 网络名称 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：导线的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | ISCH_PrimitiveWire, property: { line?: Array < number > | Array < Array < number >> ; net ?: string; color ?: string | null ; lineWidth ?: number | null ; lineType ?: ESCH_PrimitiveLineType | null ; }): Promise < ISCH_PrimitiveWire | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| ISCH_PrimitiveWire | 导线的图元 ID 或导线图元对象 |
| property | { line?: Array<number> \| Array<Array<number>>; net?: string; color?: string \| null; lineWidth?: number \| null; lineType?: ESCH_PrimitiveLineType \| null; } | 修改参数 |

- 返回值类型：Promise< ISCH_PrimitiveWire | undefined>
- 返回值描述：导线图元对象

#### SCH_SelectControl

- 类签名：export declare class SCH_SelectControl
- 类描述：原理图 & 符号 / 选择控制类
- 类备注：

##### clearSelected

- 方法签名：clearSelected (): boolean;
- 方法修饰符：
- 方法描述：清除选中

参数：

- 无

- 返回值类型：boolean
- 返回值描述：操作是否成功

##### doCrossProbeSelect

- 方法签名：doCrossProbeSelect (components ?: Array < string > , pins ?: Array < string > , nets ?: Array < string > , highlight ?: boolean, select ?: boolean): boolean;
- 方法修饰符：
- 方法描述：进行交叉选择

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| components | Array<string> | (Optional) 器件位号 |
| pins | Array<string> | (Optional) 器件位号_引脚编号，格式为 ['U1_1', 'U1_2'] |
| nets | Array<string> | (Optional) 网络名称 |
| highlight | boolean | (Optional) 是否高亮 |
| select | boolean | (Optional) 是否选中 |

- 返回值类型：boolean
- 返回值描述：操作是否成功

##### doSelectPrimitives

- 方法签名：doSelectPrimitives (primitiveIds: string | Array < string > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：使用图元 ID 选中图元

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| Array<string> | 图元 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllSelectedPrimitives

- 方法签名：getAllSelectedPrimitives (): Promise < Array < ISCH_Primitive >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< ISCH_Primitive >>
- 返回值描述：所有已选中图元的图元对象

##### getAllSelectedPrimitives_PrimitiveId

- 方法签名：getAllSelectedPrimitives_PrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：所有已选中图元的图元 ID

##### getCurrentMousePosition

- 方法签名：getCurrentMousePosition (): Promise <{ x : number ; y : number ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<{ x: number; y: number; } | undefined>
- 返回值描述：鼠标在画布上的位置， undefined 代表当前鼠标不在画布上

##### getSelectedPrimitives

- 方法签名：getSelectedPrimitives (): Promise < Array < Object >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<Object>>
- 返回值描述：选中图元的所有参数

##### getSelectedPrimitives_PrimitiveId

- 方法签名：getSelectedPrimitives_PrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：Warning: This API is now obsolete. 请使用 getAllSelectedPrimitives_PrimitiveId 替代

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：选中图元的图元 ID

#### SCH_Utils

- 类签名：export declare class SCH_Utils
- 类描述：原理图 & 符号 / 工具类
- 类备注：

- 无方法

### 枚举

#### ESCH_PrimitiveComponentType

- 枚举签名：export declare enum ESCH_PrimitiveComponentType
- 枚举描述：器件类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| COMPONENT | "part" | 元件 |
| DRAWING | "sheet" | 图纸 |
| NET_FLAG | "netflag" | 网络标识 |
| NET_LABEL | "netlabel" | 网络标签 |
| NET_PORT | "netport" | 网络端口 |
| NON_ELECTRICAL_FLAG | "nonElectrical_symbol" | 无电气标识 |
| SHORT_CIRCUIT_FLAG | "short_symbol" | 短接标识 |

#### ESCH_PrimitiveFillStyle

- 枚举签名：export declare enum ESCH_PrimitiveFillStyle
- 枚举描述：填充样式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| GRID | "Grid" | 网格 |
| HORIZONTAL_LINE | "Horizontal Line" | 横线 |
| LEFT_SLASH_LINE | "Left Slash Line" | 左斜线 |
| NONE | "None" | 无 |
| RHOMBIC_GRID | "Rhombic Grid" | 菱形网格 |
| RIGHT_SLASH_LINE | "Right Slash Line" | 右斜线 |
| SOLID | "Solid" | 实心 |
| VERTICAL_LINE | "Vertical Line" | 竖线 |

#### ESCH_PrimitiveLineType

- 枚举签名：export declare enum ESCH_PrimitiveLineType
- 枚举描述：线型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| DASHED | 1 | 短划线 |
| DOT_DASHED | 3 | 点划线 |
| DOTTED | 2 | 点线 |
| SOLID | 0 | 实线 |

#### ESCH_PrimitivePinShape

- 枚举签名：export declare enum ESCH_PrimitivePinShape
- 枚举描述：引脚形状
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| CLOCK | "Clock" | 时钟 |
| INVERTED | "Inverted" | 反向 |
| INVERTED_CLOCK | "Inverted Clock" | 反向时钟 |
| NONE | "None" | 无 |

#### ESCH_PrimitivePinType

- 枚举签名：export declare enum ESCH_PrimitivePinType
- 枚举描述：引脚类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BI | "BI" | 双向 |
| GROUND | "Ground" | 地 |
| HIZ | "HIZ" | 高阻 |
| IN | "IN" | 输入 |
| OPEN_COLLECTOR | "Open Collector" | 开集电极 |
| OPEN_EMITTER | "Open Emitter" | 开发射极 |
| OUT | "OUT" | 输出 |
| PASSIVE | "Passive" | 无源 |
| POWER | "Power" | 电源 |
| TERMINATOR | "Terminator" | 信号终端 |
| UNDEFINED | "Undefined" | 未定义 |

#### ESCH_PrimitiveType

- 枚举签名：export declare enum ESCH_PrimitiveType
- 枚举描述：图元类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ARC | "Arc" | 圆弧 |
| BEZIER | "Bezier" | 三阶贝塞尔线条 |
| BUS | "Bus" | 总线 |
| CIRCLE | "Circle" | 圆 |
| COMPONENT | "Component" | 器件 |
| COMPONENT_PIN | "ComponentPin" | 器件引脚 |
| ELLIPSE | "Ellipse" | 椭圆 |
| OBJECT | "Object" | 二进制内嵌对象 |
| PIN | "Pin" | 引脚 |
| POLYGON | "Polygon" | 多边形 |
| RECTANGLE | "Rectangle" | 矩形 |
| TEXT | "Text" | 文本 |
| WIRE | "Wire" | 导线 |

### 接口

#### ISCH_Primitive

- 接口签名：export interface ISCH_Primitive
- 接口描述：原理图图元
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| create |  | () => ISCH_Primitive \| Promise < ISCH_Primitive > |  |
| done |  | () => ISCH_Primitive \| Promise < ISCH_Primitive > |  |
| getState_PrimitiveId |  | () => string |  |
| getState_PrimitiveType |  | () => ESCH_PrimitiveType |  |
| isAsync |  | () => boolean |  |
| reset |  | () => ISCH_Primitive \| Promise < ISCH_Primitive > |  |
| toAsync |  | () => ISCH_Primitive |  |
| toSync |  | () => ISCH_Primitive |  |

接口方法：

- 无

#### ISCH_PrimitiveAPI

- 接口签名：export interface ISCH_PrimitiveAPI
- 接口描述：原理图图元接口
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| create |  | ( ... args : any []) => ISCH_Primitive \| undefined \| Promise < ISCH_Primitive > \| Promise < ISCH_Primitive \| undefined > |  |
| delete |  | ( primitiveIds : string \| any \| Array < string > \| Array < any >) => boolean \| Promise < boolean > |  |
| get |  | ISCH_Primitive \| undefined \| Promise < ISCH_Primitive \| undefined > |  |
| getAll |  | ( ... args : any []) => Array < ISCH_Primitive > \| Promise < Array < ISCH_Primitive >> |  |
| getAllPrimitiveId |  | ( ... args : any []) => Array < string > \| Promise < Array < string >> |  |
| modify |  | ( primitiveId : string \| any , ... args : any []) => ISCH_Primitive \| undefined \| Promise < ISCH_Primitive > \| Promise < ISCH_Primitive \| undefined > |  |

接口方法：

- 无

### 图元类

| 图元类名 | 描述 | 方法数量 |
|---|---|---:|
| ISCH_PrimitiveArc | 圆弧图元 | 27 |
| ISCH_PrimitiveBus | 总线图元 | 16 |
| ISCH_PrimitiveCbbSymbolComponent | 复用模块符号图元 | 2 |
| ISCH_PrimitiveCircle | 圆图元 | 23 |
| ISCH_PrimitiveComponent | 器件图元 | 42 |
| ISCH_PrimitiveComponentPin | 器件引脚图元 | 1 |
| ISCH_PrimitivePin | 引脚图元 | 39 |
| ISCH_PrimitivePolygon | 多边形（折线）图元 | 17 |
| ISCH_PrimitiveRectangle | 矩形图元 | 29 |
| ISCH_PrimitiveText | 文本图元 | 29 |
| ISCH_PrimitiveWire | 导线图元 | 16 |
| SCH_Primitive | 原理图 & 符号 / 图元类 | 3 |
| SCH_PrimitiveArc | 原理图 & 符号 / 圆弧图元类 | 7 |
| SCH_PrimitiveBus | 原理图 & 符号 / 总线图元类 | 7 |
| SCH_PrimitiveCircle | 原理图 & 符号 / 圆图元类 | 7 |
| SCH_PrimitiveComponent | 原理图 & 符号 / 器件图元类 | 20 |
| SCH_PrimitivePin | 原理图 & 符号 / 引脚图元类 | 7 |
| SCH_PrimitivePolygon | 原理图 & 符号 / 多边形（折线）图元类 | 7 |
| SCH_PrimitiveRectangle | 原理图 & 符号 / 矩形图元类 | 7 |
| SCH_PrimitiveText | 原理图 & 符号 / 文本图元类 | 7 |
| SCH_PrimitiveWire | 原理图 & 符号 / 导线图元类 | 7 |

### 类型别名

- 无

### 变量

- 无

## PCB & 封装

- 类：41（方法 600）；枚举：19；接口：12（成员 52）；图元类：31（方法 473）；类型别名：18；变量：0

### 类

#### IPCB_ComplexPolygon

- 类签名：export declare class IPCB_ComplexPolygon
- 类描述：复杂多边形
- 类备注：

##### addSource

- 方法签名：addSource (complexPolygon: TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > | IPCB_Polygon | Array < IPCB_Polygon > ): IPCB_ComplexPolygon;
- 方法修饰符：
- 方法描述：添加多边形数据

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | TPCB_PolygonSourceArray \| Array< TPCB_PolygonSourceArray > \| IPCB_Polygon \| Array< IPCB_Polygon > | 复杂多边形数据 |

- 返回值类型：IPCB_ComplexPolygon
- 返回值描述：复杂多边形对象

##### getSource

- 方法签名：getSource (): TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > ;
- 方法修饰符：
- 方法描述：获取多边形数据

参数：

- 无

- 返回值类型：TPCB_PolygonSourceArray | Array< TPCB_PolygonSourceArray >
- 返回值描述：单多边形或复杂多边形数据

##### getSourceStrictComplex

- 方法签名：getSourceStrictComplex (): Array < TPCB_PolygonSourceArray > ;
- 方法修饰符：
- 方法描述：获取复杂多边形数据

参数：

- 无

- 返回值类型：Array< TPCB_PolygonSourceArray >
- 返回值描述：复杂多边形数据

#### IPCB_Polygon

- 类签名：export declare class IPCB_Polygon
- 类描述：单多边形
- 类备注：

##### getSource

- 方法签名：getSource (): TPCB_PolygonSourceArray;
- 方法修饰符：
- 方法描述：获取单多边形数据

参数：

- 无

- 返回值类型：TPCB_PolygonSourceArray
- 返回值描述：单多边形数据

#### IPCB_PrimitiveArc

- 类签名：export declare class IPCB_PrimitiveArc implements IPCB_Primitive
- 类描述：圆弧线图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveArc > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveArc >
- 返回值描述：圆弧线图元对象

##### getAdjacentPrimitives

- 方法签名：getAdjacentPrimitives (): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc >>
- 返回值描述：相邻的直线、过孔、圆弧线图元对象

##### getEntireTrack

- 方法签名：getEntireTrack (includeVias: false ): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| includeVias | false | 是否包含导线两端的过孔 |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveArc >>
- 返回值描述：整段导线内的所有直线和圆弧线

##### getEntireTrack

- 方法签名：getEntireTrack (includeVias: true ): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| includeVias | true | 是否包含导线两端的过孔 |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia >>
- 返回值描述：整段导线内的所有直线、圆弧线，以及两端连接的过孔（如果有）

##### getState_ArcAngle

- 方法签名：getState_ArcAngle (): number;
- 方法修饰符：
- 方法描述：获取属性状态：圆弧角度

参数：

- 无

- 返回值类型：number
- 返回值描述：圆弧角度

##### getState_EndX

- 方法签名：getState_EndX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：终止位置 X

参数：

- 无

- 返回值类型：number
- 返回值描述：终止位置 X

##### getState_EndY

- 方法签名：getState_EndY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：终止位置 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：终止位置 Y

##### getState_InteractiveMode

- 方法签名：getState_InteractiveMode (): EPCB_PrimitiveArcInteractiveMode;
- 方法修饰符：
- 方法描述：获取属性状态：交互模式

参数：

- 无

- 返回值类型：EPCB_PrimitiveArcInteractiveMode
- 返回值描述：交互模式

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfLine;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfLine
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Net

- 方法签名：getState_Net (): string;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string
- 返回值描述：网络名称

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_StartX

- 方法签名：getState_StartX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：起始位置 X

参数：

- 无

- 返回值类型：number
- 返回值描述：起始位置 X

##### getState_StartY

- 方法签名：getState_StartY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：起始位置 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：起始位置 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveArc > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveArc >
- 返回值描述：圆弧线图元对象

##### setState_ArcAngle

- 方法签名：setState_ArcAngle (arcAngle: number): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| arcAngle | number | 圆弧角度 |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_EndX

- 方法签名：setState_EndX (endX: number): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| endX | number | 终止位置 X |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_EndY

- 方法签名：setState_EndY (endY: number): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| endY | number | 终止位置 Y |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_InteractiveMode

- 方法签名：setState_InteractiveMode (interactiveMode: EPCB_PrimitiveArcInteractiveMode): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactiveMode | EPCB_PrimitiveArcInteractiveMode | 交互模式 |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfLine | 层 |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_StartX

- 方法签名：setState_StartX (startX: number): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startX | number | 起始位置 X |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### setState_StartY

- 方法签名：setState_StartY (startY: number): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startY | number | 起始位置 Y |

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveArc;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveArc
- 返回值描述：圆弧线图元对象

#### IPCB_PrimitiveComponent

- 类签名：export declare class IPCB_PrimitiveComponent implements IPCB_Primitive
- 类描述：器件图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveComponent > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveComponent >
- 返回值描述：器件图元对象

##### getAllPins

- 方法签名：getAllPins (): Promise < Array < IPCB_PrimitiveComponentPad >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_PrimitiveComponentPad >>
- 返回值描述：器件焊盘图元数组

##### getState_AddIntoBom

- 方法签名：getState_AddIntoBom (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否加入 BOM

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否加入 BOM

##### getState_Component

- 方法签名：getState_Component (): { libraryUuid: string; uuid: string; };
- 方法修饰符：
- 方法描述：获取属性状态：关联库器件

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; }
- 返回值描述：关联库器件

##### getState_Designator

- 方法签名：getState_Designator (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：位号

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：位号

##### getState_Footprint

- 方法签名：getState_Footprint (): { libraryUuid: string; uuid: string; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：关联库封装

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; } | undefined
- 返回值描述：关联库封装

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfComponent;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfComponent
- 返回值描述：层

##### getState_Manufacturer

- 方法签名：getState_Manufacturer (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：制造商

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：制造商

##### getState_ManufacturerId

- 方法签名：getState_ManufacturerId (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：制造商编号

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：制造商编号

##### getState_Model3D

- 方法签名：getState_Model3D (): { libraryUuid: string; uuid: string; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：关联库 3D 模型

参数：

- 无

- 返回值类型：{ libraryUuid: string; uuid: string; } | undefined
- 返回值描述：关联库 3D 模型

##### getState_Name

- 方法签名：getState_Name (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：名称

##### getState_OtherProperty

- 方法签名：getState_OtherProperty (): { [key: string]: string | number | boolean; } | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：其它参数

参数：

- 无

- 返回值类型：{ [key: string]: string | number | boolean; } | undefined
- 返回值描述：其它参数

##### getState_Pads

- 方法签名：getState_Pads (): Array <{ primitiveId : string ; net : string ; padNumber : string ; }> | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：焊盘

参数：

- 无

- 返回值类型：Array<{ primitiveId: string; net: string; padNumber: string; }> | undefined
- 返回值描述：焊盘

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_Supplier

- 方法签名：getState_Supplier (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：供应商

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：供应商

##### getState_SupplierId

- 方法签名：getState_SupplierId (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：供应商编号

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：供应商编号

##### getState_UniqueId

- 方法签名：getState_UniqueId (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：唯一 ID

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：唯一 ID

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveComponent > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveComponent >
- 返回值描述：器件图元对象

##### setState_AddIntoBom

- 方法签名：setState_AddIntoBom (addIntoBom: boolean): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| addIntoBom | boolean | 是否加入 BOM |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Designator

- 方法签名：setState_Designator (designator: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| designator | string \| undefined | 位号 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfComponent): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfComponent | 层 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Manufacturer

- 方法签名：setState_Manufacturer (manufacturer: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| manufacturer | string \| undefined | 制造商 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_ManufacturerId

- 方法签名：setState_ManufacturerId (manufacturerId: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| manufacturerId | string \| undefined | 制造商编号 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Name

- 方法签名：setState_Name (name: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| name | string \| undefined | 名称 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_OtherProperty

- 方法签名：setState_OtherProperty (otherProperty: { [key: string]: string | number | boolean; }): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| otherProperty | { [key: string]: string \| number \| boolean; } | 其它参数 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Supplier

- 方法签名：setState_Supplier (supplier: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| supplier | string \| undefined | 供应商 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_SupplierId

- 方法签名：setState_SupplierId (supplierId: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| supplierId | string \| undefined | 供应商编号 |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_UniqueId

- 方法签名：setState_UniqueId (uniqueId: string | undefined ): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uniqueId | string \| undefined | 唯一 ID |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_X

- 方法签名：setState_X (x: number): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 坐标 Y |

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveComponent;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveComponent
- 返回值描述：器件图元对象

#### IPCB_PrimitiveComponentPad

- 类签名：export declare class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad
- 类描述：器件焊盘图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveComponentPad > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveComponentPad >
- 返回值描述：器件焊盘图元对象

##### getConnectedPrimitives

- 方法签名：getConnectedPrimitives (onlyCentreConnection: false ): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia | IPCB_PrimitivePolyline | IPCB_PrimitiveFill >> ;
- 方法修饰符：
- 方法描述：

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| onlyCentreConnection | false |  |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia | IPCB_PrimitivePolyline | IPCB_PrimitiveFill >>
- 返回值描述：

##### primitiveType

- 方法签名：primitiveType
- 方法修饰符：protected readonly
- 方法描述：EPCB_PrimitiveType.COMPONENT_PAD

参数：

- 无

- 返回值类型：
- 返回值描述：

#### IPCB_PrimitiveDimension

- 类签名：export declare class IPCB_PrimitiveDimension implements IPCB_Primitive
- 类描述：尺寸标注图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveDimension > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveDimension >
- 返回值描述：尺寸标注图元对象

##### getState_CoordinateSet

- 方法签名：getState_CoordinateSet (): TPCB_PrimitiveDimensionCoordinateSet;
- 方法修饰符：
- 方法描述：获取属性状态：坐标集

参数：

- 无

- 返回值类型：TPCB_PrimitiveDimensionCoordinateSet
- 返回值描述：坐标集

##### getState_DimensionType

- 方法签名：getState_DimensionType (): EPCB_PrimitiveDimensionType;
- 方法修饰符：
- 方法描述：获取属性状态：尺寸标注类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveDimensionType
- 返回值描述：尺寸标注类型

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfDimension;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfDimension
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Precision

- 方法签名：getState_Precision (): number;
- 方法修饰符：
- 方法描述：获取属性状态：精度

参数：

- 无

- 返回值类型：number
- 返回值描述：精度

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_TextFollow

- 方法签名：getState_TextFollow (): 0 | 1 ;
- 方法修饰符：
- 方法描述：获取属性状态：文字跟随

参数：

- 无

- 返回值类型：0 | 1
- 返回值描述：文字跟随

##### getState_Unit

- 方法签名：getState_Unit (): ESYS_Unit. MILLIMETER | ESYS_Unit. CENTIMETER | ESYS_Unit. INCH | ESYS_Unit. MIL ;
- 方法修饰符：
- 方法描述：获取属性状态：单位

参数：

- 无

- 返回值类型：ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL
- 返回值描述：单位

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveDimension > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveDimension >
- 返回值描述：尺寸标注图元对象

##### setState_CoordinateSet

- 方法签名：setState_CoordinateSet (coordinateSet: TPCB_PrimitiveDimensionCoordinateSet): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| coordinateSet | TPCB_PrimitiveDimensionCoordinateSet | 坐标集 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### setState_DimensionType

- 方法签名：setState_DimensionType (dimensionType: EPCB_PrimitiveDimensionType): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| dimensionType | EPCB_PrimitiveDimensionType | 尺寸标注类型 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfDimension | 层 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### setState_Precision

- 方法签名：setState_Precision (precision: number): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| precision | number | 精度 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### setState_Unit

- 方法签名：setState_Unit (unit: ESYS_Unit. MILLIMETER | ESYS_Unit. CENTIMETER | ESYS_Unit. INCH | ESYS_Unit. MIL ): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| unit | ESYS_Unit.MILLIMETER \| ESYS_Unit.CENTIMETER \| ESYS_Unit.INCH \| ESYS_Unit.MIL | 单位 |

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveDimension;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveDimension
- 返回值描述：尺寸标注图元对象

#### IPCB_PrimitiveFill

- 类签名：export declare class IPCB_PrimitiveFill implements IPCB_Primitive
- 类描述：填充图元
- 类备注：

##### convertToPolyline

- 方法签名：convertToPolyline (): Promise < IPCB_PrimitivePolyline > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePolyline >
- 返回值描述：折线图元对象

##### convertToPour

- 方法签名：convertToPour (): Promise < IPCB_PrimitivePour > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePour >
- 返回值描述：覆铜边框图元对象

##### convertToRegion

- 方法签名：convertToRegion (): Promise < IPCB_PrimitiveRegion > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveRegion >
- 返回值描述：区域图元对象

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveFill > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveFill >
- 返回值描述：填充图元对象

##### getState_ComplexPolygon

- 方法签名：getState_ComplexPolygon (): IPCB_Polygon;
- 方法修饰符：
- 方法描述：获取属性状态：复杂多边形

参数：

- 无

- 返回值类型：IPCB_Polygon
- 返回值描述：复杂多边形

##### getState_FillMode

- 方法签名：getState_FillMode (): EPCB_PrimitiveFillMode | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：填充模式

参数：

- 无

- 返回值类型：EPCB_PrimitiveFillMode | undefined
- 返回值描述：填充模式

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfFill;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfFill
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Net

- 方法签名：getState_Net (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：网络名称

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveFill > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveFill >
- 返回值描述：填充图元对象

##### setState_ComplexPolygon

- 方法签名：setState_ComplexPolygon (complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | IPCB_Polygon | 复杂多边形 |

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### setState_FillMode

- 方法签名：setState_FillMode (fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fillMode | EPCB_PrimitiveFillMode | 填充模式 |

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfFill | 层 |

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveFill;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveFill
- 返回值描述：填充图元对象

#### IPCB_PrimitiveImage

- 类签名：export declare class IPCB_PrimitiveImage implements IPCB_Primitive
- 类描述：图像图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveImage > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveImage >
- 返回值描述：图像图元对象

##### getState_ComplexPolygon

- 方法签名：getState_ComplexPolygon (): TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > ;
- 方法修饰符：
- 方法描述：获取属性状态：图像源数据（复杂多边形）

参数：

- 无

- 返回值类型：TPCB_PolygonSourceArray | Array< TPCB_PolygonSourceArray >
- 返回值描述：图像源数据（复杂多边形）

##### getState_Height

- 方法签名：getState_Height (): number;
- 方法修饰符：
- 方法描述：获取属性状态：高

参数：

- 无

- 返回值类型：number
- 返回值描述：高

##### getState_HorizonMirror

- 方法签名：getState_HorizonMirror (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否水平镜像

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否水平镜像

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfImage;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfImage
- 返回值描述：层

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_Width

- 方法签名：getState_Width (): number;
- 方法修饰符：
- 方法描述：获取属性状态：宽

参数：

- 无

- 返回值类型：number
- 返回值描述：宽

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：BBox 左上点坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：BBox 左上点坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：BBox 左上点坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：BBox 左上点坐标 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveImage > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveImage >
- 返回值描述：图像图元对象

##### setState_Height

- 方法签名：setState_Height (height: number): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| height | number | 高 |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_HorizonMirror

- 方法签名：setState_HorizonMirror (horizonMirror: boolean): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| horizonMirror | boolean | 是否水平镜像 |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfImage): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfImage | 层 |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_Width

- 方法签名：setState_Width (width: number): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| width | number | 宽 |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_X

- 方法签名：setState_X (x: number): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | BBox 左上点坐标 X |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | BBox 左上点坐标 Y |

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveImage;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveImage
- 返回值描述：图像图元对象

#### IPCB_PrimitiveLine

- 类签名：export declare class IPCB_PrimitiveLine implements IPCB_Primitive
- 类描述：直线图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveLine > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveLine >
- 返回值描述：直线图元对象

##### getAdjacentPrimitives

- 方法签名：getAdjacentPrimitives (): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc >>
- 返回值描述：相邻的直线、过孔、圆弧线图元对象

##### getEntireTrack

- 方法签名：getEntireTrack (includeVias: false ): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| includeVias | false | 是否包含导线两端的过孔 |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveArc >>
- 返回值描述：整段导线内的所有直线和圆弧线

##### getEntireTrack

- 方法签名：getEntireTrack (includeVias: true ): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| includeVias | true | 是否包含导线两端的过孔 |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia >>
- 返回值描述：整段导线内的所有直线、圆弧线，以及两端连接的过孔（如果有）

##### getState_EndX

- 方法签名：getState_EndX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：终止位置 X

参数：

- 无

- 返回值类型：number
- 返回值描述：终止位置 X

##### getState_EndY

- 方法签名：getState_EndY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：终止位置 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：终止位置 Y

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfLine;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfLine
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Net

- 方法签名：getState_Net (): string;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string
- 返回值描述：网络名称

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_StartX

- 方法签名：getState_StartX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：起始位置 X

参数：

- 无

- 返回值类型：number
- 返回值描述：起始位置 X

##### getState_StartY

- 方法签名：getState_StartY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：起始位置 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：起始位置 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveLine > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveLine >
- 返回值描述：直线图元对象

##### setState_EndX

- 方法签名：setState_EndX (endX: number): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| endX | number | 终止位置 X |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_EndY

- 方法签名：setState_EndY (endY: number): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| endY | number | 终止位置 Y |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfLine): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfLine | 层 |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_StartX

- 方法签名：setState_StartX (startX: number): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startX | number | 起始位置 X |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### setState_StartY

- 方法签名：setState_StartY (startY: number): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| startY | number | 起始位置 Y |

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveLine;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveLine
- 返回值描述：直线图元对象

#### IPCB_PrimitiveObject

- 类签名：export declare class IPCB_PrimitiveObject implements IPCB_Primitive
- 类描述：二进制内嵌对象图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveObject > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveObject >
- 返回值描述：二进制内嵌对象图元对象

##### getState_BinaryData

- 方法签名：getState_BinaryData (): string;
- 方法修饰符：
- 方法描述：获取属性状态：二进制数据

参数：

- 无

- 返回值类型：string
- 返回值描述：二进制数据

##### getState_FileName

- 方法签名：getState_FileName (): string;
- 方法修饰符：
- 方法描述：获取属性状态：文件名

参数：

- 无

- 返回值类型：string
- 返回值描述：文件名

##### getState_Height

- 方法签名：getState_Height (): number;
- 方法修饰符：
- 方法描述：获取属性状态：高

参数：

- 无

- 返回值类型：number
- 返回值描述：高

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfObject | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfObject | undefined
- 返回值描述：层

##### getState_Mirror

- 方法签名：getState_Mirror (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否水平镜像

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否水平镜像

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_TopLeftX

- 方法签名：getState_TopLeftX (): number | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：左上点 X

参数：

- 无

- 返回值类型：number | undefined
- 返回值描述：左上点 X

##### getState_TopLeftY

- 方法签名：getState_TopLeftY (): number | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：左上点 Y

参数：

- 无

- 返回值类型：number | undefined
- 返回值描述：左上点 Y

##### getState_Width

- 方法签名：getState_Width (): number;
- 方法修饰符：
- 方法描述：获取属性状态：宽

参数：

- 无

- 返回值类型：number
- 返回值描述：宽

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveObject > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveObject >
- 返回值描述：二进制内嵌对象图元对象

##### setState_BinaryData

- 方法签名：setState_BinaryData (binaryData: string): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：二进制数据

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| binaryData | string | 二进制数据 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_FileName

- 方法签名：setState_FileName (fileName: string): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：文件名

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | 文件名 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_Height

- 方法签名：setState_Height (height: number): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：高

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| height | number | 高 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfObject): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfObject | 层 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_Mirror

- 方法签名：setState_Mirror (mirror: boolean): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：是否水平镜像

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mirror | boolean | 是否水平镜像 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：旋转角度

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_TopLeftX

- 方法签名：setState_TopLeftX (topLeftX: number): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：左上点 X

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topLeftX | number | 左上点 X |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_TopLeftY

- 方法签名：setState_TopLeftY (topLeftY: number): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：左上点 Y

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| topLeftY | number | 左上点 Y |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### setState_Width

- 方法签名：setState_Width (width: number): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：设置属性状态：宽

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| width | number | 宽 |

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveObject;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveObject
- 返回值描述：二进制内嵌对象图元对象

#### IPCB_PrimitivePad

- 类签名：export declare class IPCB_PrimitivePad implements IPCB_Primitive
- 类描述：焊盘图元
- 类备注：

##### async

- 方法签名：async
- 方法修饰符：protected
- 方法描述：boolean

参数：

- 无

- 返回值类型：
- 返回值描述：

##### create

- 方法签名：create (): Promise < IPCB_PrimitivePad > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePad >
- 返回值描述：焊盘图元对象

##### done

- 方法签名：done (): Promise < IPCB_PrimitivePad > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePad >
- 返回值描述：尺寸标注图元对象

##### getState_HeatWelding

- 方法签名：getState_HeatWelding (): IPCB_PrimitivePadHeatWelding | null ;
- 方法修饰符：
- 方法描述：获取属性状态：热焊优化参数

参数：

- 无

- 返回值类型：IPCB_PrimitivePadHeatWelding | null
- 返回值描述：热焊优化参数

##### getState_Hole

- 方法签名：getState_Hole (): TPCB_PrimitivePadHole | null ;
- 方法修饰符：
- 方法描述：获取属性状态：孔

参数：

- 无

- 返回值类型：TPCB_PrimitivePadHole | null
- 返回值描述：孔

##### getState_HoleOffsetX

- 方法签名：getState_HoleOffsetX (): number;
- 方法修饰符：
- 方法描述：获取属性状态：孔偏移 X

参数：

- 无

- 返回值类型：number
- 返回值描述：孔偏移 X

##### getState_HoleOffsetY

- 方法签名：getState_HoleOffsetY (): number;
- 方法修饰符：
- 方法描述：获取属性状态：孔偏移 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：孔偏移 Y

##### getState_HoleRotation

- 方法签名：getState_HoleRotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：孔相对于焊盘的旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：孔相对于焊盘的旋转角度

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfPad;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfPad
- 返回值描述：层

##### getState_Metallization

- 方法签名：getState_Metallization (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否金属化孔壁

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否金属化孔壁

##### getState_Net

- 方法签名：getState_Net (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：网络名称

##### getState_Pad

- 方法签名：getState_Pad (): TPCB_PrimitivePadShape | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：焊盘外形

参数：

- 无

- 返回值类型：TPCB_PrimitivePadShape | undefined
- 返回值描述：焊盘外形

##### getState_PadNumber

- 方法签名：getState_PadNumber (): string;
- 方法修饰符：
- 方法描述：获取属性状态：焊盘编号

参数：

- 无

- 返回值类型：string
- 返回值描述：焊盘编号

##### getState_PadType

- 方法签名：getState_PadType (): EPCB_PrimitivePadType;
- 方法修饰符：
- 方法描述：获取属性状态：焊盘类型

参数：

- 无

- 返回值类型：EPCB_PrimitivePadType
- 返回值描述：焊盘类型

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_SolderMaskAndPasteMaskExpansion

- 方法签名：getState_SolderMaskAndPasteMaskExpansion (): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null ;
- 方法修饰符：
- 方法描述：获取属性状态：阻焊/助焊扩展

参数：

- 无

- 返回值类型：IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null
- 返回值描述：阻焊/助焊扩展

##### getState_SpecialPad

- 方法签名：getState_SpecialPad (): TPCB_PrimitiveSpecialPadShape | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：特殊焊盘外形

参数：

- 无

- 返回值类型：TPCB_PrimitiveSpecialPadShape | undefined
- 返回值描述：特殊焊盘外形

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：位置 X

参数：

- 无

- 返回值类型：number
- 返回值描述：位置 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：位置 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：位置 Y

##### heatWelding

- 方法签名：heatWelding
- 方法修饰符：protected
- 方法描述：IPCB_PrimitivePadHeatWelding | null

参数：

- 无

- 返回值类型：
- 返回值描述：

##### hole

- 方法签名：hole
- 方法修饰符：protected
- 方法描述：TPCB_PrimitivePadHole | null

参数：

- 无

- 返回值类型：
- 返回值描述：

##### holeOffsetX

- 方法签名：holeOffsetX
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### holeOffsetY

- 方法签名：holeOffsetY
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### holeRotation

- 方法签名：holeRotation
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### layer

- 方法签名：layer
- 方法修饰符：protected
- 方法描述：TPCB_LayersOfPad

参数：

- 无

- 返回值类型：
- 返回值描述：

##### metallization

- 方法签名：metallization
- 方法修饰符：protected
- 方法描述：boolean

参数：

- 无

- 返回值类型：
- 返回值描述：

##### net?

- 方法签名：net?
- 方法修饰符：protected
- 方法描述：string

参数：

- 无

- 返回值类型：
- 返回值描述：

##### pad?

- 方法签名：pad?
- 方法修饰符：protected
- 方法描述：TPCB_PrimitivePadShape

参数：

- 无

- 返回值类型：
- 返回值描述：

##### padNumber

- 方法签名：padNumber
- 方法修饰符：protected
- 方法描述：string

参数：

- 无

- 返回值类型：
- 返回值描述：

##### padType

- 方法签名：padType
- 方法修饰符：protected
- 方法描述：EPCB_PrimitivePadType

参数：

- 无

- 返回值类型：
- 返回值描述：

##### primitiveId?

- 方法签名：primitiveId?
- 方法修饰符：protected
- 方法描述：string

参数：

- 无

- 返回值类型：
- 返回值描述：

##### primitiveLock

- 方法签名：primitiveLock
- 方法修饰符：protected
- 方法描述：boolean

参数：

- 无

- 返回值类型：
- 返回值描述：

##### primitiveType

- 方法签名：primitiveType
- 方法修饰符：protected readonly
- 方法描述：EPCB_PrimitiveType

参数：

- 无

- 返回值类型：
- 返回值描述：

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitivePad > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePad >
- 返回值描述：焊盘图元对象

##### rotation

- 方法签名：rotation
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### setState_HeatWelding

- 方法签名：setState_HeatWelding (heatWelding: IPCB_PrimitivePadHeatWelding | null ): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| heatWelding | IPCB_PrimitivePadHeatWelding \| null | 热焊优化参数 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Hole

- 方法签名：setState_Hole (hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| hole | TPCB_PrimitivePadHole | 焊盘钻孔 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_HoleOffsetX

- 方法签名：setState_HoleOffsetX (holeOffsetX: number): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| holeOffsetX | number | 孔偏移 X |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_HoleOffsetY

- 方法签名：setState_HoleOffsetY (holeOffsetY: number): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| holeOffsetY | number | 孔偏移 Y |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_HoleRotation

- 方法签名：setState_HoleRotation (holeRotation: number): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| holeRotation | number | 孔相对于焊盘的旋转角度 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfPad): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfPad | 层 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Metallization

- 方法签名：setState_Metallization (metallization: boolean): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| metallization | boolean | 是否金属化孔壁 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Net

- 方法签名：setState_Net (net ?: string): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Pad

- 方法签名：setState_Pad (pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pad | TPCB_PrimitivePadShape | 焊盘外形 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_PadNumber

- 方法签名：setState_PadNumber (padNumber: string): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| padNumber | string | 焊盘编号 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_SolderMaskAndPasteMaskExpansion

- 方法签名：setState_SolderMaskAndPasteMaskExpansion (solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null ): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| solderMaskAndPasteMaskExpansion | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion \| null | 阻焊/助焊扩展 |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_SpecialPad

- 方法签名：setState_SpecialPad (specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| specialPad | TPCB_PrimitiveSpecialPadShape |  |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_X

- 方法签名：setState_X (x: number): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 位置 X |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 位置 Y |

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### solderMaskAndPasteMaskExpansion

- 方法签名：solderMaskAndPasteMaskExpansion
- 方法修饰符：protected
- 方法描述：IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null

参数：

- 无

- 返回值类型：
- 返回值描述：

##### specialPad?

- 方法签名：specialPad?
- 方法修饰符：protected
- 方法描述：TPCB_PrimitiveSpecialPadShape

参数：

- 无

- 返回值类型：
- 返回值描述：

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitivePad;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitivePad
- 返回值描述：焊盘图元对象

##### x

- 方法签名：x
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

##### y

- 方法签名：y
- 方法修饰符：protected
- 方法描述：number

参数：

- 无

- 返回值类型：
- 返回值描述：

#### IPCB_PrimitivePolyline

- 类签名：export declare class IPCB_PrimitivePolyline implements IPCB_Primitive
- 类描述：折线图元
- 类备注：

##### convertToFill

- 方法签名：convertToFill (): Promise < IPCB_PrimitiveFill > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveFill >
- 返回值描述：填充图元对象

##### convertToPour

- 方法签名：convertToPour (): Promise < IPCB_PrimitivePour > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePour >
- 返回值描述：覆铜边框图元对象

##### convertToRegion

- 方法签名：convertToRegion (): Promise < IPCB_PrimitiveRegion > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveRegion >
- 返回值描述：区域图元对象

##### done

- 方法签名：done (): Promise < IPCB_PrimitivePolyline > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePolyline >
- 返回值描述：折线图元对象

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfLine;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfLine
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Net

- 方法签名：getState_Net (): string;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string
- 返回值描述：网络名称

##### getState_Polygon

- 方法签名：getState_Polygon (): IPCB_Polygon;
- 方法修饰符：
- 方法描述：获取属性状态：单多边形

参数：

- 无

- 返回值类型：IPCB_Polygon
- 返回值描述：单多边形

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitivePolyline > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePolyline >
- 返回值描述：折线图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfLine): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfLine | 层 |

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

##### setState_Polygon

- 方法签名：setState_Polygon (polygon: IPCB_Polygon): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| polygon | IPCB_Polygon | 单多边形 |

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitivePolyline;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitivePolyline
- 返回值描述：折线图元对象

#### IPCB_PrimitivePour

- 类签名：export declare class IPCB_PrimitivePour implements IPCB_Primitive
- 类描述：覆铜边框图元
- 类备注：

##### convertToFill

- 方法签名：convertToFill (): Promise < IPCB_PrimitiveFill > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveFill >
- 返回值描述：填充图元对象

##### convertToPolyline

- 方法签名：convertToPolyline (): Promise < IPCB_PrimitivePolyline > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePolyline >
- 返回值描述：折线图元对象

##### convertToRegion

- 方法签名：convertToRegion (): Promise < IPCB_PrimitiveRegion > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveRegion >
- 返回值描述：区域图元对象

##### done

- 方法签名：done (): Promise < IPCB_PrimitivePour > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePour >
- 返回值描述：覆铜边框图元对象

##### getState_ComplexPolygon

- 方法签名：getState_ComplexPolygon (): IPCB_Polygon;
- 方法修饰符：
- 方法描述：获取属性状态：复杂多边形

参数：

- 无

- 返回值类型：IPCB_Polygon
- 返回值描述：复杂多边形

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfCopper;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfCopper
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Net

- 方法签名：getState_Net (): string;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string
- 返回值描述：网络名称

##### getState_PourFillMethod

- 方法签名：getState_PourFillMethod (): any;
- 方法修饰符：
- 方法描述：获取属性状态：覆铜填充方法

参数：

- 无

- 返回值类型：any
- 返回值描述：覆铜填充方法

##### getState_PourName

- 方法签名：getState_PourName (): string;
- 方法修饰符：
- 方法描述：获取属性状态：覆铜边框名称

参数：

- 无

- 返回值类型：string
- 返回值描述：覆铜边框名称

##### getState_PourPriority

- 方法签名：getState_PourPriority (): number;
- 方法修饰符：
- 方法描述：获取属性状态：覆铜优先级

参数：

- 无

- 返回值类型：number
- 返回值描述：覆铜优先级

##### getState_PreserveSilos

- 方法签名：getState_PreserveSilos (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否保留孤岛

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否保留孤岛

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitivePour > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePour >
- 返回值描述：覆铜边框图元对象

##### setState_ComplexPolygon

- 方法签名：setState_ComplexPolygon (complexPolygon: IPCB_Polygon): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | IPCB_Polygon | 复杂多边形 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfCopper): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfCopper | 层 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_PourFillMethod

- 方法签名：setState_PourFillMethod (pourFillMethod: EPCB_PrimitivePourFillMethod): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pourFillMethod | EPCB_PrimitivePourFillMethod | 覆铜填充方法 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_PourName

- 方法签名：setState_PourName (pourName: string): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pourName | string | 覆铜边框名称 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_PourPriority

- 方法签名：setState_PourPriority (pourPriority: number): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pourPriority | number | 覆铜优先级 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_PreserveSilos

- 方法签名：setState_PreserveSilos (preserveSilos: boolean): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| preserveSilos | boolean | 是否保留孤岛 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitivePour;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitivePour
- 返回值描述：覆铜边框图元对象

#### IPCB_PrimitivePoured

- 类签名：export declare class IPCB_PrimitivePoured implements IPCB_Primitive
- 类描述：覆铜填充图元
- 类备注：

##### getState_PourFills

- 方法签名：getState_PourFills (): Array < IPCB_PrimitivePouredPourFill > ;
- 方法修饰符：
- 方法描述：获取属性状态：覆铜填充区域

参数：

- 无

- 返回值类型：Array< IPCB_PrimitivePouredPourFill >
- 返回值描述：覆铜填充区域

##### getState_PourPrimitiveId

- 方法签名：getState_PourPrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：覆铜边框图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：覆铜边框图元 ID

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

#### IPCB_PrimitiveRegion

- 类签名：export declare class IPCB_PrimitiveRegion implements IPCB_Primitive
- 类描述：区域图元
- 类备注：

##### convertToFill

- 方法签名：convertToFill (): Promise < IPCB_PrimitiveFill > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveFill >
- 返回值描述：填充图元对象

##### convertToPolyline

- 方法签名：convertToPolyline (): Promise < IPCB_PrimitivePolyline > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePolyline >
- 返回值描述：折线图元对象

##### convertToPour

- 方法签名：convertToPour (): Promise < IPCB_PrimitivePour > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitivePour >
- 返回值描述：覆铜边框图元对象

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveRegion > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveRegion >
- 返回值描述：区域图元对象

##### getState_ComplexPolygon

- 方法签名：getState_ComplexPolygon (): IPCB_Polygon;
- 方法修饰符：
- 方法描述：获取属性状态：复杂多边形

参数：

- 无

- 返回值类型：IPCB_Polygon
- 返回值描述：复杂多边形

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfRegion;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfRegion
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_RegionName

- 方法签名：getState_RegionName (): string | undefined ;
- 方法修饰符：
- 方法描述：获取属性状态：区域名称

参数：

- 无

- 返回值类型：string | undefined
- 返回值描述：区域名称

##### getState_RuleType

- 方法签名：getState_RuleType (): Array < EPCB_PrimitiveRegionRuleType > ;
- 方法修饰符：
- 方法描述：获取属性状态：区域规则类型

参数：

- 无

- 返回值类型：Array< EPCB_PrimitiveRegionRuleType >
- 返回值描述：区域规则类型

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveRegion > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveRegion >
- 返回值描述：区域图元对象

##### setState_ComplexPolygon

- 方法签名：setState_ComplexPolygon (complexPolygon: IPCB_Polygon): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | IPCB_Polygon | 复杂多边形 |

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfRegion): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfRegion | 层 |

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### setState_RegionName

- 方法签名：setState_RegionName (regionName ?: string): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| regionName | string | (Optional) 区域名称 |

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### setState_RuleType

- 方法签名：setState_RuleType (ruleType: Array < EPCB_PrimitiveRegionRuleType > ): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| ruleType | Array< EPCB_PrimitiveRegionRuleType > | 区域规则类型 |

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveRegion;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveRegion
- 返回值描述：区域图元对象

#### IPCB_PrimitiveString

- 类签名：export declare class IPCB_PrimitiveString implements IPCB_Primitive
- 类描述：文本图元
- 类备注：

##### _constructor_

- 方法签名：constructor (layer: TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily ?: string, fontSize ?: number, lineWidth ?: number, alignMode ?: EPCB_PrimitiveStringAlignMode, rotation ?: number, reverse ?: boolean, expansion ?: number, mirror ?: boolean, primitiveLock ?: boolean, primitiveId ?: string);
- 方法修饰符：
- 方法描述：Constructs a new instance of the IPCB_PrimitiveString class

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfImage |  |
| x | number |  |
| y | number |  |
| text | string |  |
| fontFamily | string | (Optional) |
| fontSize | number | (Optional) |
| lineWidth | number | (Optional) |
| alignMode | EPCB_PrimitiveStringAlignMode | (Optional) |
| rotation | number | (Optional) |
| reverse | boolean | (Optional) |
| expansion | number | (Optional) |
| mirror | boolean | (Optional) |
| primitiveLock | boolean | (Optional) |
| primitiveId | string | (Optional) |

- 返回值类型：TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily ?: string, fontSize ?: number, lineWidth ?: number, alignMode ?: EPCB_PrimitiveStringAlignMode, rotation ?: number, reverse ?: boolean, expansion ?: number, mirror ?: boolean, primitiveLock ?: boolean, primitiveId ?: string)
- 返回值描述：

##### getState_AlignMode

- 方法签名：getState_AlignMode (): EPCB_PrimitiveStringAlignMode;
- 方法修饰符：
- 方法描述：获取属性状态：对齐模式

参数：

- 无

- 返回值类型：EPCB_PrimitiveStringAlignMode
- 返回值描述：对齐模式

##### getState_Expansion

- 方法签名：getState_Expansion (): number;
- 方法修饰符：
- 方法描述：获取属性状态：反相扩展

参数：

- 无

- 返回值类型：number
- 返回值描述：反相扩展

##### getState_FontFamily

- 方法签名：getState_FontFamily (): string;
- 方法修饰符：
- 方法描述：获取属性状态：字体

参数：

- 无

- 返回值类型：string
- 返回值描述：字体

##### getState_FontSize

- 方法签名：getState_FontSize (): number;
- 方法修饰符：
- 方法描述：获取属性状态：字号

参数：

- 无

- 返回值类型：number
- 返回值描述：字号

##### getState_Layer

- 方法签名：getState_Layer (): TPCB_LayersOfImage;
- 方法修饰符：
- 方法描述：获取属性状态：层

参数：

- 无

- 返回值类型：TPCB_LayersOfImage
- 返回值描述：层

##### getState_LineWidth

- 方法签名：getState_LineWidth (): number;
- 方法修饰符：
- 方法描述：获取属性状态：线宽

参数：

- 无

- 返回值类型：number
- 返回值描述：线宽

##### getState_Mirror

- 方法签名：getState_Mirror (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否镜像

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否镜像

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_Reverse

- 方法签名：getState_Reverse (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否反相

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否反相

##### getState_Rotation

- 方法签名：getState_Rotation (): number;
- 方法修饰符：
- 方法描述：获取属性状态：旋转角度

参数：

- 无

- 返回值类型：number
- 返回值描述：旋转角度

##### getState_Text

- 方法签名：getState_Text (): string;
- 方法修饰符：
- 方法描述：获取属性状态：文本内容

参数：

- 无

- 返回值类型：string
- 返回值描述：文本内容

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### setState_AlignMode

- 方法签名：setState_AlignMode (alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| alignMode | EPCB_PrimitiveStringAlignMode | 对齐模式 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Expansion

- 方法签名：setState_Expansion (expansion: number): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| expansion | number | 反相扩展 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_FontFamily

- 方法签名：setState_FontFamily (fontFamily: string): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fontFamily | string | 字体 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_FontSize

- 方法签名：setState_FontSize (fontSize: number): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fontSize | number | 字号 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Layer

- 方法签名：setState_Layer (layer: TPCB_LayersOfImage): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfImage | 层 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_LineWidth

- 方法签名：setState_LineWidth (lineWidth: number): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lineWidth | number | 线宽 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Mirror

- 方法签名：setState_Mirror (mirror: boolean): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| mirror | boolean | 是否镜像 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Reverse

- 方法签名：setState_Reverse (reverse: boolean): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| reverse | boolean | 是否反相 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Rotation

- 方法签名：setState_Rotation (rotation: number): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| rotation | number | 旋转角度 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Text

- 方法签名：setState_Text (text: string): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| text | string | 文本内容 |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_X

- 方法签名：setState_X (x: number): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 坐标 Y |

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveString;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveString
- 返回值描述：文本图元对象

#### IPCB_PrimitiveVia

- 类签名：export declare class IPCB_PrimitiveVia implements IPCB_Primitive
- 类描述：过孔图元
- 类备注：

##### done

- 方法签名：done (): Promise < IPCB_PrimitiveVia > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveVia >
- 返回值描述：过孔图元对象

##### getAdjacentPrimitives

- 方法签名：getAdjacentPrimitives (): Promise < Array < IPCB_PrimitiveLine | IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_PrimitiveLine | IPCB_PrimitiveArc >>
- 返回值描述：相邻的导线、圆弧线图元对象

##### getState_DesignRuleBlindViaName

- 方法签名：getState_DesignRuleBlindViaName (): string | null ;
- 方法修饰符：
- 方法描述：获取属性状态：盲埋孔设计规则项名称

参数：

- 无

- 返回值类型：string | null
- 返回值描述：盲埋孔设计规则项名称

##### getState_Diameter

- 方法签名：getState_Diameter (): number;
- 方法修饰符：
- 方法描述：获取属性状态：外径

参数：

- 无

- 返回值类型：number
- 返回值描述：外径

##### getState_HoleDiameter

- 方法签名：getState_HoleDiameter (): number;
- 方法修饰符：
- 方法描述：获取属性状态：孔径

参数：

- 无

- 返回值类型：number
- 返回值描述：孔径

##### getState_Net

- 方法签名：getState_Net (): string;
- 方法修饰符：
- 方法描述：获取属性状态：网络名称

参数：

- 无

- 返回值类型：string
- 返回值描述：网络名称

##### getState_PrimitiveId

- 方法签名：getState_PrimitiveId (): string;
- 方法修饰符：
- 方法描述：获取属性状态：图元 ID

参数：

- 无

- 返回值类型：string
- 返回值描述：图元 ID

##### getState_PrimitiveLock

- 方法签名：getState_PrimitiveLock (): boolean;
- 方法修饰符：
- 方法描述：获取属性状态：是否锁定

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否锁定

##### getState_PrimitiveType

- 方法签名：getState_PrimitiveType (): EPCB_PrimitiveType;
- 方法修饰符：
- 方法描述：获取属性状态：图元类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveType
- 返回值描述：图元类型

##### getState_SolderMaskExpansion

- 方法签名：getState_SolderMaskExpansion (): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null ;
- 方法修饰符：
- 方法描述：获取属性状态：阻焊/助焊扩展

参数：

- 无

- 返回值类型：IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null
- 返回值描述：阻焊/助焊扩展

##### getState_ViaType

- 方法签名：getState_ViaType (): EPCB_PrimitiveViaType;
- 方法修饰符：
- 方法描述：获取属性状态：过孔类型

参数：

- 无

- 返回值类型：EPCB_PrimitiveViaType
- 返回值描述：过孔类型

##### getState_X

- 方法签名：getState_X (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 X

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 X

##### getState_Y

- 方法签名：getState_Y (): number;
- 方法修饰符：
- 方法描述：获取属性状态：坐标 Y

参数：

- 无

- 返回值类型：number
- 返回值描述：坐标 Y

##### isAsync

- 方法签名：isAsync (): boolean;
- 方法修饰符：
- 方法描述：查询图元是否为异步图元

参数：

- 无

- 返回值类型：boolean
- 返回值描述：是否为异步图元

##### reset

- 方法签名：reset (): Promise < IPCB_PrimitiveVia > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< IPCB_PrimitiveVia >
- 返回值描述：过孔图元对象

##### setState_DesignRuleBlindViaName

- 方法签名：setState_DesignRuleBlindViaName (designRuleBlindViaName: string | null ): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| designRuleBlindViaName | string \| null | 盲埋孔设计规则项名称 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_Diameter

- 方法签名：setState_Diameter (diameter: number): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| diameter | number | 外径 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_HoleDiameter

- 方法签名：setState_HoleDiameter (holeDiameter: number): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| holeDiameter | number | 孔径 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_Net

- 方法签名：setState_Net (net: string): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_PrimitiveLock

- 方法签名：setState_PrimitiveLock (primitiveLock: boolean): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveLock | boolean | 是否锁定 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_SolderMaskExpansion

- 方法签名：setState_SolderMaskExpansion (solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null ): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| solderMaskExpansion | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion \| null | 阻焊/助焊扩展 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_ViaType

- 方法签名：setState_ViaType (viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| viaType | EPCB_PrimitiveViaType | 过孔类型 |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_X

- 方法签名：setState_X (x: number): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### setState_Y

- 方法签名：setState_Y (y: number): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| y | number | 坐标 Y |

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### toAsync

- 方法签名：toAsync (): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：将图元转换为异步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

##### toSync

- 方法签名：toSync (): IPCB_PrimitiveVia;
- 方法修饰符：
- 方法描述：将图元转换为同步图元

参数：

- 无

- 返回值类型：IPCB_PrimitiveVia
- 返回值描述：过孔图元对象

#### PCB_Document

- 类签名：export declare class PCB_Document
- 类描述：PCB & 封装 / 文档操作类
- 类备注：

##### convertCanvasOriginToDataOrigin

- 方法签名：convertCanvasOriginToDataOrigin (x: number, y: number): Promise <{ x : number ; y : number ; }>;
- 方法修饰符：
- 方法描述：输入画布坐标返回该坐标对应的数据坐标

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number |  |
| y | number |  |

- 返回值类型：Promise<{ x: number; y: number; }>
- 返回值描述：数据原点坐标

##### convertDataOriginToCanvasOrigin

- 方法签名：convertDataOriginToCanvasOrigin (x: number, y: number): Promise <{ x : number ; y : number ; }>;
- 方法修饰符：
- 方法描述：输入数据坐标返回该坐标对应的画布坐标

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 数据原点 X |
| y | number | 数据原点 Y |

- 返回值类型：Promise<{ x: number; y: number; }>
- 返回值描述：画布原点坐标

##### getCalculatingRatlineStatus

- 方法签名：getCalculatingRatlineStatus (): Promise < EPCB_DocumentRatlineCalculatingActiveStatus > ;
- 方法修饰符：
- 方法描述：获取当前飞线计算功能状态

参数：

- 无

- 返回值类型：Promise< EPCB_DocumentRatlineCalculatingActiveStatus >
- 返回值描述：功能状态

##### getCanvasOrigin

- 方法签名：getCanvasOrigin (): Promise <{ offsetX : number ; offsetY : number ; }>;
- 方法修饰符：
- 方法描述：获取画布原点相对于数据原点的偏移坐标

参数：

- 无

- 返回值类型：Promise<{ offsetX: number; offsetY: number; }>
- 返回值描述：画布原点相对于数据原点的偏移坐标

##### getPrimitiveAtPoint

- 方法签名：getPrimitiveAtPoint (x: number, y: number): Promise < IPCB_Primitive | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标点 X |
| y | number | 坐标点 Y |

- 返回值类型：Promise< IPCB_Primitive | undefined>
- 返回值描述：坐标点的图元，如若坐标点无法找到图元，将返回 undefined

##### getPrimitivesInRegion

- 方法签名：getPrimitivesInRegion (left: number, right: number, top: number, bottom: number, leftToRight ?: boolean): Promise < Array < IPCB_Primitive >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| left | number | 矩形框第一 X 坐标 |
| right | number | 矩形框第二 X 坐标 |
| top | number | 矩形框第一 Y 坐标 |
| bottom | number | 矩形框第二 Y 坐标 |
| leftToRight | boolean | (Optional) 是否仅获取完全框选的图元， false 则触碰即获取 |

- 返回值类型：Promise<Array< IPCB_Primitive >>
- 返回值描述：区域内所有图元

##### importAutoLayoutJsonFile

- 方法签名：importAutoLayoutJsonFile (autoLayoutFile: File): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| autoLayoutFile | File | 欲导入的 JSON 文件 |

- 返回值类型：Promise<boolean>
- 返回值描述：导入操作是否成功

##### importAutoRouteJsonFile

- 方法签名：importAutoRouteJsonFile (autoRouteFile: File): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| autoRouteFile | File | 欲导入的 JSON 文件 |

- 返回值类型：Promise<boolean>
- 返回值描述：导入操作是否成功

##### importChanges

- 方法签名：importChanges (uuid ?: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：从原理图导入变更

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uuid | string | (Optional) 原理图 UUID，默认为关联在同一个 Board 下的原理图 |

- 返回值类型：Promise<boolean>
- 返回值描述：导入操作是否成功，导入失败或未传入原理图 UUID 的游离 PCB 将返回 false

##### navigateToCoordinates

- 方法签名：navigateToCoordinates (x: number, y: number): Promise < boolean > ;
- 方法修饰符：
- 方法描述：定位到画布坐标

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | 坐标 X |
| y | number | 坐标 Y |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### navigateToRegion

- 方法签名：navigateToRegion (left: number, right: number, top: number, bottom: number): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| left | number | 矩形框第一 X 坐标 |
| right | number | 矩形框第二 X 坐标 |
| top | number | 矩形框第一 Y 坐标 |
| bottom | number | 矩形框第二 Y 坐标 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### save

- 方法签名：save (uuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：保存文档

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| uuid | string |  |

- 返回值类型：Promise<boolean>
- 返回值描述：保存操作是否成功，保存失败、上传失败等错误均返回 false

##### setCanvasOrigin

- 方法签名：setCanvasOrigin (offsetX: number, offsetY: number): Promise < boolean > ;
- 方法修饰符：
- 方法描述：设置画布原点相对于数据原点的偏移坐标

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| offsetX | number | 画布原点相对于数据原点的 X 坐标偏移 |
| offsetY | number | 画布原点相对于数据原点的 Y 坐标偏移 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### startCalculatingRatline

- 方法签名：startCalculatingRatline (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：启动飞线计算功能

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### stopCalculatingRatline

- 方法签名：stopCalculatingRatline (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：停止飞线计算功能

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### zoomToBoardOutline

- 方法签名：zoomToBoardOutline (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### PCB_Drc

- 类签名：export declare class PCB_Drc
- 类描述：PCB & 封装 / 设计规则检查（DRC）类
- 类备注：

##### addNetToEqualLengthNetGroup

- 方法签名：addNetToEqualLengthNetGroup (equalLengthNetGroupName: string, net: string | Array < string > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| equalLengthNetGroupName | string | 等长网络组名称 |
| net | string \| Array<string> | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### addNetToNetClass

- 方法签名：addNetToNetClass (netClassName: string, net: string | Array < string > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netClassName | string | 网络类名称 |
| net | string \| Array<string> | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### addPadPairToPadPairGroup

- 方法签名：addPadPairToPadPairGroup (padPairGroupName: string, padPair: [string, string] | Array < [string, string] > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| padPairGroupName | string | 焊盘对组名称 |
| padPair | [string, string] \| Array<[string, string]> | 焊盘对 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### check

- 方法签名：check (strict: boolean, userInterface: boolean, includeVerboseError: false ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| strict | boolean | 是否严格检查，当前 PCB 统一为严格检查模式 |
| userInterface | boolean | 是否显示 UI（呼出底部 DRC 窗口） |
| includeVerboseError | false | 是否在返回值中包含详细错误信息，如若为 true ，则返回值将始终为数组 |

- 返回值类型：Promise<boolean>
- 返回值描述：DRC 检查是否通过

##### check

- 方法签名：check (strict: boolean, userInterface: boolean, includeVerboseError: true ): Promise < Array < any >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| strict | boolean | 是否严格检查，当前 PCB 统一为严格检查模式 |
| userInterface | boolean | 是否显示 UI（呼出底部 DRC 窗口） |
| includeVerboseError | true | 是否在返回值中包含详细错误信息，如若为 true ，则返回值将始终为数组 |

- 返回值类型：Promise<Array<any>>
- 返回值描述：DRC 检查的详细结果

##### createDifferentialPair

- 方法签名：createDifferentialPair (differentialPairName: string, positiveNet: string, negativeNet: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| differentialPairName | string | 差分对名称 |
| positiveNet | string | 正网络名称 |
| negativeNet | string | 负网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### createEqualLengthNetGroup

- 方法签名：createEqualLengthNetGroup (equalLengthNetGroupName: string, nets: Array < string > , color: IPCB_EqualLengthNetGroupItem[ 'color' ]): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| equalLengthNetGroupName | string | 等长网络组名称 |
| nets | Array<string> | 网络名称数组 |
| color | IPCB_EqualLengthNetGroupItem ['color'] | 等长网络组颜色 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### createNetClass

- 方法签名：createNetClass (netClassName: string, nets: Array < string > , color: IPCB_EqualLengthNetGroupItem[ 'color' ]): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netClassName | string | 网络类名称 |
| nets | Array<string> | 网络名称数组 |
| color | IPCB_EqualLengthNetGroupItem ['color'] | 网络类颜色 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### createPadPairGroup

- 方法签名：createPadPairGroup (padPairGroupName: string, padPairs: Array < [string, string] > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| padPairGroupName | string | 焊盘对组名称 |
| padPairs | Array<[string, string]> | 焊盘对数组 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteDifferentialPair

- 方法签名：deleteDifferentialPair (differentialPairName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| differentialPairName | string | 差分对名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteEqualLengthNetGroup

- 方法签名：deleteEqualLengthNetGroup (equalLengthNetGroupName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| equalLengthNetGroupName | string | 等长网络组名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteNetClass

- 方法签名：deleteNetClass (netClassName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netClassName | string | 网络类名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deletePadPairGroup

- 方法签名：deletePadPairGroup (padPairGroupName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| padPairGroupName | string | 焊盘对组名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteRuleConfiguration

- 方法签名：deleteRuleConfiguration (configurationName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| configurationName | string | 配置名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除是否成功

##### getAllDifferentialPairs

- 方法签名：getAllDifferentialPairs (): Promise < Array < IPCB_DifferentialPairItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_DifferentialPairItem >>
- 返回值描述：所有差分对的详细属性

##### getAllEqualLengthNetGroups

- 方法签名：getAllEqualLengthNetGroups (): Promise < Array < IPCB_EqualLengthNetGroupItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_EqualLengthNetGroupItem >>
- 返回值描述：所有等长网络组的详细属性

##### getAllNetClasses

- 方法签名：getAllNetClasses (): Promise < Array < IPCB_NetClassItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_NetClassItem >>
- 返回值描述：所有网络类的详细属性

##### getAllPadPairGroups

- 方法签名：getAllPadPairGroups (): Promise < Array < IPCB_PadPairGroupItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_PadPairGroupItem >>
- 返回值描述：所有焊盘对组的详细属性

##### getAllRuleConfigurations

- 方法签名：getAllRuleConfigurations (includeSystem ?: boolean): Promise < Array <{ [ key : string ] : any ; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| includeSystem | boolean | (Optional) 是否获取系统设计规则配置 |

- 返回值类型：Promise<Array<{ [key: string]: any; }>>
- 返回值描述：所有设计规则配置

##### getCurrentRuleConfiguration

- 方法签名：getCurrentRuleConfiguration (): Promise <{ [ key : string ] : any ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<{ [key: string]: any; } | undefined>
- 返回值描述：当前设计规则配置， undefined 为获取失败

##### getCurrentRuleConfigurationName

- 方法签名：getCurrentRuleConfigurationName (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：获取当前设计规则配置名称

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：当前设计规则配置名称， undefined 为获取失败

##### getDefaultRuleConfigurationName

- 方法签名：getDefaultRuleConfigurationName (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：默认设计规则配置的名称， undefined 为获取失败

##### getNetByNetRules

- 方法签名：getNetByNetRules (): Promise <{ [ key : string ] : any ; }>;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<{ [key: string]: any; }>
- 返回值描述：当前 PCB 的所有网络-网络规则

##### getNetRules

- 方法签名：getNetRules (): Promise < Array <{ [ key : string ] : any ; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<{ [key: string]: any; }>>
- 返回值描述：当前 PCB 的所有网络规则

##### getPadPairGroupMinWireLength

- 方法签名：getPadPairGroupMinWireLength (padPairGroupName: string): Promise < Array < IPCB_PadPairMinWireLengthItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| padPairGroupName | string | 焊盘对组名称 |

- 返回值类型：Promise<Array< IPCB_PadPairMinWireLengthItem >>
- 返回值描述：所有焊盘对的最短导线长度

##### getRegionRules

- 方法签名：getRegionRules (): Promise < Array <{ [ key : string ] : any ; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<{ [key: string]: any; }>>
- 返回值描述：

##### getRuleConfiguration

- 方法签名：getRuleConfiguration (configurationName: string): Promise <{ [ key : string ] : any ; } | undefined >;
- 方法修饰符：
- 方法描述：获取指定设计规则配置

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| configurationName | string | 配置名称 |

- 返回值类型：Promise<{ [key: string]: any; } | undefined>
- 返回值描述：设计规则配置， undefined 为不存在该设计规则

##### modifyDifferentialPairName

- 方法签名：modifyDifferentialPairName (originalDifferentialPairName: string, differentialPairName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| originalDifferentialPairName | string | 原差分对名称 |
| differentialPairName | string | 新差分对名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### modifyDifferentialPairNegativeNet

- 方法签名：modifyDifferentialPairNegativeNet (differentialPairName: string, negativeNet: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| differentialPairName | string | 差分对名称 |
| negativeNet | string | 负网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### modifyDifferentialPairPositiveNet

- 方法签名：modifyDifferentialPairPositiveNet (differentialPairName: string, positiveNet: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| differentialPairName | string | 差分对名称 |
| positiveNet | string | 正网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### modifyEqualLengthNetGroupName

- 方法签名：modifyEqualLengthNetGroupName (originalEqualLengthNetGroupName: string, equalLengthNetGroupName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| originalEqualLengthNetGroupName | string | 原等长网络组名称 |
| equalLengthNetGroupName | string | 新等长网络组名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### modifyNetClassName

- 方法签名：modifyNetClassName (originalNetClassName: string, netClassName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| originalNetClassName | string | 原网络类名称 |
| netClassName | string | 新网络类名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### modifyPadPairGroupName

- 方法签名：modifyPadPairGroupName (originalPadPairGroupName: string, padPairGroupName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| originalPadPairGroupName | string | 原焊盘对组名称 |
| padPairGroupName | string | 新焊盘对组名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### overwriteNetByNetRules

- 方法签名：overwriteNetByNetRules (netByNetRules: { [key: string]: any; }): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netByNetRules | { [key: string]: any; } | 网络-网络规则 |

- 返回值类型：Promise<boolean>
- 返回值描述：覆写是否成功

##### overwriteNetRules

- 方法签名：overwriteNetRules (netRules: Array <{ [ key : string ] : any ; }>): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netRules | Array<{ [key: string]: any; }> | 网络规则 |

- 返回值类型：Promise<boolean>
- 返回值描述：覆写是否成功

##### overwriteRegionRules

- 方法签名：overwriteRegionRules (regionRules: Array <{ [ key : string ] : any ; }>): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| regionRules | Array<{ [key: string]: any; }> | 区域规则 |

- 返回值类型：Promise<boolean>
- 返回值描述：覆写是否成功

##### removeNetFromEqualLengthNetGroup

- 方法签名：removeNetFromEqualLengthNetGroup (equalLengthNetGroupName: string, net: string | Array < string > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| equalLengthNetGroupName | string | 等长网络组名称 |
| net | string \| Array<string> | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### removeNetFromNetClass

- 方法签名：removeNetFromNetClass (netClassName: string, net: string | Array < string > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| netClassName | string | 网络类名称 |
| net | string \| Array<string> | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### removePadPairFromPadPairGroup

- 方法签名：removePadPairFromPadPairGroup (padPairGroupName: string, padPair: [string, string] | Array < [string, string] > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| padPairGroupName | string | 焊盘对组名称 |
| padPair | [string, string] \| Array<[string, string]> | 焊盘对 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### renameRuleConfiguration

- 方法签名：renameRuleConfiguration (originalConfigurationName: string, configurationName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| originalConfigurationName | string | 原设计规则配置名称 |
| configurationName | string | 新设计规则配置名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：重命名是否成功

##### saveRuleConfiguration

- 方法签名：saveRuleConfiguration (ruleConfiguration: { [key: string]: any; }, configurationName: string, allowOverwrite ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| ruleConfiguration | { [key: string]: any; } | 设计规则配置 |
| configurationName | string | 配置名称 |
| allowOverwrite | boolean | (Optional) 是否允许覆写同名设计规则配置， false 则将在遇到同名设计规则配置时返回 false ，请注意可能的数据丢失风险 |

- 返回值类型：Promise<boolean>
- 返回值描述：保存是否成功

##### setAsDefaultRuleConfiguration

- 方法签名：setAsDefaultRuleConfiguration (configurationName: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| configurationName | string | 配置名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：设置是否成功

#### PCB_Event

- 类签名：export declare class PCB_Event
- 类描述：PCB & 封装 / 事件类
- 类备注：

##### addMouseEventListener

- 方法签名：addMouseEventListener (id: string, eventType: 'all' | 'selected' | 'clearSelected' , callFn: ( eventType : 'selected' | 'clearSelected' ) => void | Promise <void> , onlyOnce ?: boolean): void ;
- 方法修饰符：
- 方法描述：新增鼠标事件监听

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 事件 ID，用以防止重复注册事件 |
| eventType | 'all' \| 'selected' \| 'clearSelected' | 事件类型 |
| callFn | (eventType: 'selected' \| 'clearSelected') => void \| Promise<void> | 事件触发时的回调函数 |
| onlyOnce | boolean | (Optional) 是否仅监听一次 |

- 返回值类型：void
- 返回值描述：

##### isEventListenerAlreadyExist

- 方法签名：isEventListenerAlreadyExist (id: string): boolean;
- 方法修饰符：
- 方法描述：查询事件监听是否存在

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 事件 ID |

- 返回值类型：boolean
- 返回值描述：事件监听是否存在

##### removeEventListener

- 方法签名：removeEventListener (id: string): boolean;
- 方法修饰符：
- 方法描述：移除事件监听

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| id | string | 事件 ID |

- 返回值类型：boolean
- 返回值描述：是否移除指定事件监听

#### PCB_Layer

- 类签名：export declare class PCB_Layer
- 类描述：PCB & 封装 / 图层操作类
- 类备注：

##### addCustomLayer

- 方法签名：addCustomLayer (): Promise < TPCB_LayersOfCustom | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise< TPCB_LayersOfCustom | undefined>
- 返回值描述：新增的自定义层的图层 ID，如若为 undefined 则为新增失败，可能是自定义层数量已达到上限

##### getAllLayers

- 方法签名：getAllLayers (): Promise < Array < IPCB_LayerItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_LayerItem >>
- 返回值描述：所有图层的详细属性

##### lockLayer

- 方法签名：lockLayer (layer ?: TPCB_LayersInTheSelectable | Array < TPCB_LayersInTheSelectable > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersInTheSelectable \| Array< TPCB_LayersInTheSelectable > | (Optional) 层，如若不指定任何层则默认为所有层 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### modifyLayer

- 方法签名：modifyLayer (layer: TPCB_LayersInTheSelectable, property: { name?: string; type ?: TPCB_LayerTypesOfInnerLayer; color ?: string; transparency ?: number; }): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersInTheSelectable | 层 |
| property | { name?: string; type?: TPCB_LayerTypesOfInnerLayer ; color?: string; transparency?: number; } | 属性 |

- 返回值类型：Promise<boolean>
- 返回值描述：修改后的图层属性，如若为 undefined 则代表修改失败或图层不存在

##### removeLayer

- 方法签名：removeLayer (layer: TPCB_LayersOfCustom): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfCustom | 层 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### selectLayer

- 方法签名：selectLayer (layer: TPCB_LayersInTheSelectable): Promise < boolean > ;
- 方法修饰符：
- 方法描述：选中图层

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersInTheSelectable | 层 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功，不存在指定层将返回 false

##### setInactiveLayerDisplayMode

- 方法签名：setInactiveLayerDisplayMode (displayMode ?: EPCB_InactiveLayerDisplayMode): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| displayMode | EPCB_InactiveLayerDisplayMode | (Optional) 展示模式 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否设置成功

##### setInactiveLayerTransparency

- 方法签名：setInactiveLayerTransparency (transparency: number): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| transparency | number | 透明度，范围 0-100 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setLayerColorConfiguration

- 方法签名：setLayerColorConfiguration (colorConfiguration: EPCB_LayerColorConfiguration): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| colorConfiguration | EPCB_LayerColorConfiguration | 颜色配置 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setLayerInvisible

- 方法签名：setLayerInvisible (layer ?: TPCB_LayersInTheSelectable | Array < TPCB_LayersInTheSelectable > , setOtherLayerVisible ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersInTheSelectable \| Array< TPCB_LayersInTheSelectable > | (Optional) 层，如若不指定任何层则默认为所有层 |
| setOtherLayerVisible | boolean | (Optional) 是否将其它层设置为可见 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setLayerVisible

- 方法签名：setLayerVisible (layer ?: TPCB_LayersInTheSelectable | Array < TPCB_LayersInTheSelectable > , setOtherLayerInvisible ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersInTheSelectable \| Array< TPCB_LayersInTheSelectable > | (Optional) 层，如若不指定任何层则默认为所有层 |
| setOtherLayerInvisible | boolean | (Optional) 是否将其它层设置为不可见 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setPcbType

- 方法签名：setPcbType (pcbType: EPCB_PcbPlateType): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| pcbType | EPCB_PcbPlateType | PCB 类型 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setTheNumberOfCopperLayers

- 方法签名：setTheNumberOfCopperLayers (numberOfLayers: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| numberOfLayers | 2 \| 4 \| 6 \| 8 \| 10 \| 12 \| 14 \| 16 \| 18 \| 20 \| 22 \| 24 \| 26 \| 28 \| 30 \| 32 | 层数 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### unlockLayer

- 方法签名：unlockLayer (layer ?: TPCB_LayersInTheSelectable | Array < TPCB_LayersInTheSelectable > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersInTheSelectable \| Array< TPCB_LayersInTheSelectable > | (Optional) 层，如若不指定任何层则默认为所有层 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### PCB_ManufactureData

- 类签名：export declare class PCB_ManufactureData
- 类描述：PCB & 封装 / 生产资料类
- 类备注：

##### deleteBomTemplate

- 方法签名：deleteBomTemplate (template: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| template | string | BOM 模板名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get3DFile

- 方法签名：get3DFile (fileName ?: string, fileType ?: 'step' | 'obj' , element ?: Array < 'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer' > , modelMode ?: 'Outfit' | 'Parts' , autoGenerateModels ?: boolean): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| fileType | 'step' \| 'obj' | (Optional) 文件类型 |
| element | Array<'Component Model' \| 'Via' \| 'Silkscreen' \| 'Wire In Signal Layer'> | (Optional) 导出对象 |
| modelMode | 'Outfit' \| 'Parts' | (Optional) 导出模式， Outfit = 装配体， Parts = 零件 |
| autoGenerateModels | boolean | (Optional) 是否为未绑定 3D 模型的元件自动生成 3D 模型（根据元件的“高度”属性） |

- 返回值类型：Promise<File | undefined>
- 返回值描述：3D 模型文件数据

##### get3DShellFile

- 方法签名：get3DShellFile (fileName ?: string, fileType ?: 'stl' | 'step' | 'obj' ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| fileType | 'stl' \| 'step' \| 'obj' | (Optional) 文件类型 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：3D 外壳文件数据

##### getAltiumDesignerFile

- 方法签名：getAltiumDesignerFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：Altium Designer 文件数据

##### getAutoLayoutJsonFile

- 方法签名：getAutoLayoutJsonFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：自动布局 JSON 文件数据

##### getAutoRouteJsonFile

- 方法签名：getAutoRouteJsonFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：自动布线 JSON 文件数据

##### getBomFile

- 方法签名：getBomFile (fileName ?: string, fileType ?: 'xlsx' | 'csv' , template ?: string, filterOptions ?: Array <{ property : string ; includeValue : boolean | string ; }>, statistics ?: Array < string > , property ?: Array < string > , columns ?: Array < IPCB_BomPropertiesTableColumns > ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| fileType | 'xlsx' \| 'csv' | (Optional) 文件类型 |
| template | string | (Optional) 模板名称 |
| filterOptions | Array<{ property: string; includeValue: boolean \| string; }> | (Optional) 过滤规则，仅应包含需要启用的规则， property 为规则名称， includeValue 为匹配的值 |
| statistics | Array<string> | (Optional) 统计，包含所有需要启用的统计项的名称 |
| property | Array<string> | (Optional) 属性，包含所有需要启用的属性的名称 |
| columns | Array< IPCB_BomPropertiesTableColumns > | (Optional) 列的属性及排序， title 、 sort 、 group 、 orderWeight 不传入则取默认值， null 代表 **无** 或 **空** |

- 返回值类型：Promise<File | undefined>
- 返回值描述：BOM 文件数据

##### getBomTemplateFile

- 方法签名：getBomTemplateFile (template: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| template | string | BOM 模板名称 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：BOM 模板文件

##### getBomTemplates

- 方法签名：getBomTemplates (): Promise < string[] > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<string[]>
- 返回值描述：BOM 模板列表

##### getDsnFile

- 方法签名：getDsnFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：自动布线 DSN 文件数据

##### getDxfFile

- 方法签名：getDxfFile (fileName ?: string, layers ?: Array <{ layerId : number ; mirror : boolean ; }>, objects ?: Array < string > ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| layers | Array<{ layerId: number; mirror: boolean; }> | (Optional) 导出层 |
| objects | Array<string> | (Optional) 导出对象 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：DXF 文件数据

##### getFlyingProbeTestFile

- 方法签名：getFlyingProbeTestFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：飞针测试文件数据

##### getGerberFile

- 方法签名：getGerberFile (fileName ?: string, colorSilkscreen ?: boolean, unit ?: ESYS_Unit. MILLIMETER | ESYS_Unit. INCH , digitalFormat ?: { integerNumber: number; decimalNumber: number; }, other ?: { metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean; }, layers ?: Array <{ layerId : number ; isMirror : boolean ; }>, objects ?: Array < 'Pad' | 'Via' | 'Track' | 'Text' | 'Image' | 'Dimension' | 'BoardOutline' | 'BoardCutout' | 'CopperFilled' | 'SolidRegion' | 'FPCStiffener' | 'Line' | 'PlaneZone' | 'ComponentProperty' | 'ComponentSilkscreen' | 'TearDrop' > ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| colorSilkscreen | boolean | (Optional) 是否生成彩色丝印制造文件（嘉立创专用文件） |
| unit | ESYS_Unit.MILLIMETER \| ESYS_Unit.INCH | (Optional) 单位 |
| digitalFormat | { integerNumber: number; decimalNumber: number; } | (Optional) 数字格式 |
| other | { metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean; } | (Optional) 其它 |
| layers | Array<{ layerId: number; isMirror: boolean; }> | (Optional) 导出层，默认则按照嘉立创生产需求导出 |
| objects | Array<'Pad' \| 'Via' \| 'Track' \| 'Text' \| 'Image' \| 'Dimension' \| 'BoardOutline' \| 'BoardCutout' \| 'CopperFilled' \| 'SolidRegion' \| 'FPCStiffener' \| 'Line' \| 'PlaneZone' \| 'ComponentProperty' \| 'ComponentSilkscreen' \| 'TearDrop'> | (Optional) 导出对象，默认则按照嘉立创生产需求导出 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：PCB 制版文件数据

##### getIpcD356AFile

- 方法签名：getIpcD356AFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：IPC-D-356A 文件数据

##### getNetlistFile

- 方法签名：getNetlistFile (fileName ?: string, netlistType ?: ESYS_NetlistType): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| netlistType | ESYS_NetlistType | (Optional) 网表类型 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：网表文件数据

##### getOpenDatabaseDoublePlusFile

- 方法签名：getOpenDatabaseDoublePlusFile (fileName ?: string, unit ?: ESYS_Unit. INCH , otherData ?: { metallizedDrilledHoles?: boolean; nonMetallizedDrilledHoles ?: boolean; drillTable ?: boolean; flyingProbeTestFile ?: boolean; }, layers ?: Array <{ layerId : number ; mirror : boolean ; }>, objects ?: Array <{ objectName : string ; }>): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| unit | ESYS_Unit.INCH | (Optional) 单位 |
| otherData | { metallizedDrilledHoles?: boolean; nonMetallizedDrilledHoles?: boolean; drillTable?: boolean; flyingProbeTestFile?: boolean; } | (Optional) 其它 |
| layers | Array<{ layerId: number; mirror: boolean; }> | (Optional) 导出层，默认则按照嘉立创生产需求导出 |
| objects | Array<{ objectName: string; }> | (Optional) 导出对象，默认则按照嘉立创生产需求导出 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：ODB++ 文件数据

##### getPadsFile

- 方法签名：getPadsFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：PADS 文件数据

##### getPcbInfoFile

- 方法签名：getPcbInfoFile (fileName ?: string): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：PCB 信息文件

##### getPdfFile

- 方法签名：getPdfFile (fileName ?: string, outputMethod ?: EPCB_PdfOutputMethod, contentConfig ?: { displayAttributesAsMenu: boolean; showOutlineOnly: boolean; }, watermark ?: { show?: boolean; content ?: string; styleConfig ?: { color: string; transparency: 'Opaque' | '75%' | '50%' | '25%' ; font: string; fontSize: string; style: { blood: boolean; italic: boolean; underline: boolean; }; slope: 0 | 45 | 90 ; denseness: 'Single' | 'Sparse' | 'Std' | 'Dense' ; }; }): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| outputMethod | EPCB_PdfOutputMethod | (Optional) 输出方式 |
| contentConfig | { displayAttributesAsMenu: boolean; showOutlineOnly: boolean; } | (Optional) 内容配置 |
| watermark | { show?: boolean; content?: string; styleConfig?: { color: string; transparency: 'Opaque' \| '75%' \| '50%' \| '25%'; font: string; fontSize: string; style: { blood: boolean; italic: boolean; underline: boolean; }; slope: 0 \| 45 \| 90; denseness: 'Single' \| 'Sparse' \| 'Std' \| 'Dense'; }; } | (Optional) 水印 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：PDF 文件数据（或压缩包）

##### getPickAndPlaceFile

- 方法签名：getPickAndPlaceFile (fileName ?: string, fileType ?: 'xlsx' | 'csv' , unit ?: ESYS_Unit. MILLIMETER | ESYS_Unit. MIL ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| fileType | 'xlsx' \| 'csv' | (Optional) 文件类型 |
| unit | ESYS_Unit.MILLIMETER \| ESYS_Unit.MIL | (Optional) 单位 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：坐标文件数据

##### getTestPointFile

- 方法签名：getTestPointFile (fileName ?: string, fileType ?: 'xlsx' | 'csv' ): Promise < File | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| fileName | string | (Optional) 文件名 |
| fileType | 'xlsx' \| 'csv' | (Optional) 文件类型 |

- 返回值类型：Promise<File | undefined>
- 返回值描述：测试点报告文件数据

##### place3DShellOrder

- 方法签名：place3DShellOrder (interactive ?: boolean, ignoreWarning ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactive | boolean | (Optional) 是否启用交互式检查 如若启用，则会存在弹窗等待用户进行交互，且无法使用 ignoreWarning 参数忽略警告， 即 ignoreWarning 参数将被忽略； 如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 true 并在新标签页打开下单页面 |
| ignoreWarning | boolean | (Optional) 在非交互式检查时忽略警告 如果设置为 true ，将会忽略所有检查警告项并尽可能生成下单资料； 如果设置为 false ，存在任意警告将中断执行并返回 false 的结果 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否通过下单检查

##### placeComponentsOrder

- 方法签名：placeComponentsOrder (interactive ?: boolean, ignoreWarning ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactive | boolean | (Optional) 是否启用交互式检查 如若启用，则会存在弹窗等待用户进行交互，且无法使用 ignoreWarning 参数忽略警告， 即 ignoreWarning 参数将被忽略； 如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 true 并在新标签页打开下单页面 |
| ignoreWarning | boolean | (Optional) 在非交互式检查时忽略警告 如果设置为 true ，将会忽略所有检查警告项并尽可能生成下单资料； 如果设置为 false ，存在任意警告将中断执行并返回 false 的结果 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否通过下单检查

##### placePcbOrder

- 方法签名：placePcbOrder (interactive ?: boolean, ignoreWarning ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactive | boolean | (Optional) 是否启用交互式检查 如若启用，则会存在弹窗等待用户进行交互，且无法使用 ignoreWarning 参数忽略警告， 即 ignoreWarning 参数将被忽略； 如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 true 并在新标签页打开下单页面 |
| ignoreWarning | boolean | (Optional) 在非交互式检查时忽略警告 如果设置为 true ，将会忽略所有检查警告项并尽可能生成下单资料； 如果设置为 false ，存在任意警告将中断执行并返回 false 的结果 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否通过下单检查

##### placeSmtComponentsOrder

- 方法签名：placeSmtComponentsOrder (interactive ?: boolean, ignoreWarning ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| interactive | boolean | (Optional) 是否启用交互式检查 如若启用，则会存在弹窗等待用户进行交互，且无法使用 ignoreWarning 参数忽略警告， 即 ignoreWarning 参数将被忽略； 如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 true 并在新标签页打开下单页面 |
| ignoreWarning | boolean | (Optional) 在非交互式检查时忽略警告 如果设置为 true ，将会忽略所有检查警告项并尽可能生成下单资料； 如果设置为 false ，存在任意警告将中断执行并返回 false 的结果 |

- 返回值类型：Promise<boolean>
- 返回值描述：是否通过下单检查

##### uploadBomTemplateFile

- 方法签名：uploadBomTemplateFile (templateFile: File, template ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| templateFile | File | BOM 模板文件 |
| template | string | (Optional) BOM 模板名称，如若为 undefined 则自动从 templateFile 中取值 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：BOM 模板名称

#### PCB_MathPolygon

- 类签名：export declare class PCB_MathPolygon
- 类描述：PCB & 封装 / 多边形数学类
- 类备注：

##### calculateBBoxHeight

- 方法签名：calculateBBoxHeight (complexPolygon: TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > ): number;
- 方法修饰符：
- 方法描述：

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | TPCB_PolygonSourceArray \| Array< TPCB_PolygonSourceArray > |  |

- 返回值类型：number
- 返回值描述：

##### calculateBBoxWidth

- 方法签名：calculateBBoxWidth (complexPolygon: TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > ): number;
- 方法修饰符：
- 方法描述：

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | TPCB_PolygonSourceArray \| Array< TPCB_PolygonSourceArray > |  |

- 返回值类型：number
- 返回值描述：

##### convertImageToComplexPolygon

- 方法签名：convertImageToComplexPolygon (imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance ?: number, simplification ?: number, smoothing ?: number, despeckling ?: number, whiteAsBackgroundColor ?: boolean, inversion ?: boolean): Promise < IPCB_ComplexPolygon | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| imageBlob | Blob | 图像 Blob 文件，可以使用 方法从文件系统读取文件 |
| imageWidth | number | 图像宽度 |
| imageHeight | number | 图像高度 |
| tolerance | number | (Optional) 容差，取值范围 0 - 1 |
| simplification | number | (Optional) 简化，取值范围 0 - 1 |
| smoothing | number | (Optional) 平滑，取值范围 0 - 1.33 |
| despeckling | number | (Optional) 去斑，取值范围 0 - 5 |
| whiteAsBackgroundColor | boolean | (Optional) 是否白色作为背景色 |
| inversion | boolean | (Optional) 是否反相 |

- 返回值类型：Promise< IPCB_ComplexPolygon | undefined>
- 返回值描述：复杂多边形对象

##### createComplexPolygon

- 方法签名：createComplexPolygon (complexPolygon: TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > | IPCB_Polygon | Array < IPCB_Polygon > ): IPCB_ComplexPolygon | undefined ;
- 方法修饰符：
- 方法描述：创建复杂多边形

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygon | TPCB_PolygonSourceArray \| Array< TPCB_PolygonSourceArray > \| IPCB_Polygon \| Array< IPCB_Polygon > | 复杂多边形数据 |

- 返回值类型：IPCB_ComplexPolygon | undefined
- 返回值描述：复杂多边形对象， undefined 表示数据不合法

##### createPolygon

- 方法签名：createPolygon (polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined ;
- 方法修饰符：
- 方法描述：创建单多边形

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| polygon | TPCB_PolygonSourceArray | 单多边形数据 |

- 返回值类型：IPCB_Polygon | undefined
- 返回值描述：单多边形对象， undefined 表示数据不合法

##### splitPolygon

- 方法签名：splitPolygon ( ... complexPolygons: Array < IPCB_ComplexPolygon > ): Array < IPCB_Polygon > ;
- 方法修饰符：
- 方法描述：拆分单多边形

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| complexPolygons | Array< IPCB_ComplexPolygon > | 复杂多边形 |

- 返回值类型：Array< IPCB_Polygon >
- 返回值描述：单多边形数组

#### PCB_Net

- 类签名：export declare class PCB_Net
- 类描述：PCB & 封装 / 网络类
- 类备注：

##### getAllNetName

- 方法签名：getAllNetName (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：Warning: This API is now obsolete. 请使用 getAllNetsName 替代

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：网络名称数组

##### getAllNetsName

- 方法签名：getAllNetsName (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：获取所有网络的网络名称

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：网络名称数组

##### getAllPrimitivesByNet

- 方法签名：getAllPrimitivesByNet (net: string, primitiveTypes ?: Array < EPCB_PrimitiveType > ): Promise < Array < IPCB_Primitive >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |
| primitiveTypes | Array< EPCB_PrimitiveType > | (Optional) 图元类型数组，如若指定图元类型不存在网络属性，返回的数据将恒为空 |

- 返回值类型：Promise<Array< IPCB_Primitive >>
- 返回值描述：图元对象数组

##### getNetLength

- 方法签名：getNetLength (net: string): Promise < number | undefined > ;
- 方法修饰符：
- 方法描述：获取指定网络的长度

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：Promise<number | undefined>
- 返回值描述：网络长度， undefined 为不存在该网络， 0 为网络无长度

##### getNetlist

- 方法签名：getNetlist (type ?: ESYS_NetlistType): Promise < string > ;
- 方法修饰符：
- 方法描述：获取网表

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| type | ESYS_NetlistType | (Optional) 网表格式 |

- 返回值类型：Promise<string>
- 返回值描述：网表数据

##### highlightNet

- 方法签名：highlightNet (net: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### selectNet

- 方法签名：selectNet (net: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### setNetlist

- 方法签名：setNetlist (type: ESYS_NetlistType | undefined , netlist: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：更新网表

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| type | ESYS_NetlistType \| undefined | 网表格式 |
| netlist | string | 网表数据 |

- 返回值类型：Promise<boolean>
- 返回值描述：

##### unhighlightNet

- 方法签名：unhighlightNet (net: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

#### PCB_Primitive

- 类签名：export declare class PCB_Primitive
- 类描述：PCB & 封装 / 图元类
- 类备注：

##### getPrimitivesBBox

- 方法签名：getPrimitivesBBox (primitiveIds: Array < string | IPCB_Primitive > ): Promise <{ minX : number ; minY : number ; maxX : number ; maxY : number ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string \| IPCB_Primitive > | 图元 ID 数组或图元对象数组 |

- 返回值类型：Promise<{ minX: number; minY: number; maxX: number; maxY: number; } | undefined>
- 返回值描述：图元的 BBox，如若图元不存在或没有 BBox，将会返回 undefined 的结果

#### PCB_PrimitiveArc

- 类签名：export declare class PCB_PrimitiveArc implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 圆弧线图元类
- 类备注：

##### create

- 方法签名：create (net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, arcAngle: number, lineWidth ?: number, interactiveMode ?: EPCB_PrimitiveArcInteractiveMode, primitiveLock ?: boolean): Promise < IPCB_PrimitiveArc | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |
| layer | TPCB_LayersOfLine | 层 |
| startX | number | 起始位置 X |
| startY | number | 起始位置 Y |
| endX | number | 终止位置 X |
| endY | number | 终止位置 Y |
| arcAngle | number | 圆弧角度 |
| lineWidth | number | (Optional) 线宽 |
| interactiveMode | EPCB_PrimitiveArcInteractiveMode | (Optional) 交互模式 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveArc | undefined>
- 返回值描述：圆弧线图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveArc | Array < string > | Array < IPCB_PrimitiveArc >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveArc \| Array<string> \| Array< IPCB_PrimitiveArc > | 圆弧线的图元 ID 或圆弧线图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveArc | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 圆弧线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveArc | undefined>
- 返回值描述：圆弧线图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 圆弧线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveArc >>
- 返回值描述：圆弧线图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (net ?: string, layer ?: TPCB_LayersOfLine, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveArc >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfLine | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveArc >>
- 返回值描述：圆弧线图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (net ?: string, layer ?: TPCB_LayersOfLine, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfLine | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：圆弧线的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveArc, property: { net?: string; layer ?: TPCB_LayersOfLine; startX ?: number; startY ?: number; endX ?: number; endY ?: number; arcAngle ?: number; lineWidth ?: number; interactiveMode ?: EPCB_PrimitiveArcInteractiveMode; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveArc | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveArc | 图元 ID |
| property | { net?: string; layer?: TPCB_LayersOfLine ; startX?: number; startY?: number; endX?: number; endY?: number; arcAngle?: number; lineWidth?: number; interactiveMode?: EPCB_PrimitiveArcInteractiveMode ; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveArc | undefined>
- 返回值描述：圆弧线图元对象

#### PCB_PrimitiveAttribute

- 类签名：export declare class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 属性图元类
- 类备注：

- 无方法

#### PCB_PrimitiveComponent

- 类签名：export declare class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 器件图元类
- 类备注：

##### create

- 方法签名：create (component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem, layer: TPCB_LayersOfComponent, x: number, y: number, rotation ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| component | { libraryUuid: string; uuid: string; } \| ILIB_DeviceItem | 关联库器件 |
| layer | TPCB_LayersOfComponent | 层 |
| x | number | 坐标 X |
| y | number | 坐标 Y |
| rotation | number | (Optional) 旋转角度 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveComponent | Array < string > | Array < IPCB_PrimitiveComponent >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveComponent \| Array<string> \| Array< IPCB_PrimitiveComponent > | 器件的图元 ID 或器件图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveComponent >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveComponent >>
- 返回值描述：器件图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfComponent, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveComponent >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfComponent | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveComponent >>
- 返回值描述：器件图元对象数组

##### getAllPinsByPrimitiveId

- 方法签名：getAllPinsByPrimitiveId (primitiveId: string): Promise < Array < IPCB_PrimitiveComponentPad > | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string | 器件图元 ID |

- 返回值类型：Promise<Array< IPCB_PrimitiveComponentPad > | undefined>
- 返回值描述：器件焊盘图元数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfComponent, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfComponent | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：器件的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveComponent, property: { layer?: TPCB_LayersOfComponent; x ?: number; y ?: number; rotation ?: number; primitiveLock ?: boolean; addIntoBom ?: boolean; designator ?: string | null ; name ?: string | null ; uniqueId ?: string | null ; manufacturer ?: string | null ; manufacturerId ?: string | null ; supplier ?: string | null ; supplierId ?: string | null ; otherProperty ?: { [key: string]: any; }; }): Promise < IPCB_PrimitiveComponent | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveComponent | 图元 ID |
| property | { layer?: TPCB_LayersOfComponent ; x?: number; y?: number; rotation?: number; primitiveLock?: boolean; addIntoBom?: boolean; designator?: string \| null; name?: string \| null; uniqueId?: string \| null; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: { [key: string]: any; }; } |  |

- 返回值类型：Promise< IPCB_PrimitiveComponent | undefined>
- 返回值描述：器件图元对象

#### PCB_PrimitiveDimension

- 类签名：export declare class PCB_PrimitiveDimension implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 尺寸标注图元类
- 类备注：

##### create

- 方法签名：create (dimensionType: EPCB_PrimitiveDimensionType, coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, layer ?: TPCB_LayersOfDimension, unit ?: ESYS_Unit. MILLIMETER | ESYS_Unit. CENTIMETER | ESYS_Unit. INCH | ESYS_Unit. MIL , lineWidth ?: number, precision ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitiveDimension | undefined > ;
- 方法修饰符：
- 方法描述：创建尺寸标注

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| dimensionType | EPCB_PrimitiveDimensionType | 尺寸标注类型 |
| coordinateSet | TPCB_PrimitiveDimensionCoordinateSet | 尺寸标注坐标集 |
| layer | TPCB_LayersOfDimension | (Optional) 层 |
| unit | ESYS_Unit.MILLIMETER \| ESYS_Unit.CENTIMETER \| ESYS_Unit.INCH \| ESYS_Unit.MIL | (Optional) 单位 |
| lineWidth | number | (Optional) 线宽 |
| precision | number | (Optional) 精度，取值范围 0 - 4 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveDimension | undefined>
- 返回值描述：尺寸标注图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveDimension | Array < string > | Array < IPCB_PrimitiveDimension >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveDimension \| Array<string> \| Array< IPCB_PrimitiveDimension > | 尺寸标注的图元 ID 或尺寸标注图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveDimension | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 尺寸标注的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveDimension | undefined>
- 返回值描述：尺寸标注图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveDimension >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 尺寸标注的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveDimension >>
- 返回值描述：尺寸标注图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfDimension, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveDimension >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfDimension | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveDimension >>
- 返回值描述：尺寸标注图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfDimension, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfDimension | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：尺寸标注的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveDimension, property: { dimensionType?: EPCB_PrimitiveDimensionType; coordinateSet ?: TPCB_PrimitiveDimensionCoordinateSet; layer ?: TPCB_LayersOfDimension; unit ?: ESYS_Unit. MILLIMETER | ESYS_Unit. CENTIMETER | ESYS_Unit. INCH | ESYS_Unit. MIL ; lineWidth ?: number; precision ?: number; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveDimension | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveDimension | 图元 ID |
| property | { dimensionType?: EPCB_PrimitiveDimensionType ; coordinateSet?: TPCB_PrimitiveDimensionCoordinateSet ; layer?: TPCB_LayersOfDimension ; unit?: ESYS_Unit.MILLIMETER \| ESYS_Unit.CENTIMETER \| ESYS_Unit.INCH \| ESYS_Unit.MIL ; lineWidth?: number; precision?: number; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveDimension | undefined>
- 返回值描述：尺寸标注图元对象

#### PCB_PrimitiveFill

- 类签名：export declare class PCB_PrimitiveFill implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 填充图元类
- 类备注：

##### create

- 方法签名：create (layer: TPCB_LayersOfFill, complexPolygon: IPCB_Polygon, net ?: string, fillMode ?: EPCB_PrimitiveFillMode, lineWidth ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitiveFill | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfFill | 层 |
| complexPolygon | IPCB_Polygon | 复杂多边形对象 |
| net | string | (Optional) 网络名称 |
| fillMode | EPCB_PrimitiveFillMode | (Optional) 填充模式 |
| lineWidth | number | (Optional) 线宽 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveFill | undefined>
- 返回值描述：填充图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveFill | Array < string > | Array < IPCB_PrimitiveFill >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveFill \| Array<string> \| Array< IPCB_PrimitiveFill > | 填充的图元 ID 或填充图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveFill | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveFill | undefined>
- 返回值描述：填充图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveFill >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveFill >>
- 返回值描述：填充图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfFill, net ?: string, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveFill >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfFill | (Optional) 层 |
| net | string | (Optional) 网络名称 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveFill >>
- 返回值描述：填充图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfFill, net ?: string, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfFill | (Optional) 层 |
| net | string | (Optional) 网络名称 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：填充的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveFill, property: { layer?: TPCB_LayersOfFill; complexPolygon ?: IPCB_Polygon; net ?: string; fillMode ?: EPCB_PrimitiveFillMode; lineWidth ?: number; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveFill | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveFill | 图元 ID |
| property | { layer?: TPCB_LayersOfFill ; complexPolygon?: IPCB_Polygon ; net?: string; fillMode?: EPCB_PrimitiveFillMode ; lineWidth?: number; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveFill | undefined>
- 返回值描述：填充图元对象， undefined 表示修改失败

#### PCB_PrimitiveImage

- 类签名：export declare class PCB_PrimitiveImage implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 图像图元类
- 类备注：

##### create

- 方法签名：create (x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array < TPCB_PolygonSourceArray > | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width ?: number, height ?: number, rotation ?: number, horizonMirror ?: boolean, primitiveLock ?: boolean): Promise < IPCB_PrimitiveImage | undefined > ;
- 方法修饰符：
- 方法描述：创建图像

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| x | number | BBox 左上点坐标 X |
| y | number | BBox 左上点坐标 Y |
| complexPolygon | TPCB_PolygonSourceArray \| Array< TPCB_PolygonSourceArray > \| IPCB_Polygon \| IPCB_ComplexPolygon | 图像源数据（复杂多边形），可以使用 PCB_MathPolygon.convertImageToComplexPolygon() 方法将图像文件转换为复杂多边形数据 |
| layer | TPCB_LayersOfImage | 层 |
| width | number | (Optional) 宽 |
| height | number | (Optional) 高 |
| rotation | number | (Optional) 旋转角度 |
| horizonMirror | boolean | (Optional) 是否水平镜像 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveImage | undefined>
- 返回值描述：图像图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveImage | Array < string > | Array < IPCB_PrimitiveImage >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveImage \| Array<string> \| Array< IPCB_PrimitiveImage > | 图像的图元 ID 或图像图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveImage | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 图像的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveImage | undefined>
- 返回值描述：图像图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveImage >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 图像的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveImage >>
- 返回值描述：图像图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfImage, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveImage >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfImage | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveImage >>
- 返回值描述：图像图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfImage, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfImage | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：图像的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveImage, property: { x?: number; y ?: number; layer ?: TPCB_LayersOfImage; width ?: number; height ?: number; rotation ?: number; horizonMirror ?: boolean; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveImage | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveImage | 图元 ID |
| property | { x?: number; y?: number; layer?: TPCB_LayersOfImage ; width?: number; height?: number; rotation?: number; horizonMirror?: boolean; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveImage | undefined>
- 返回值描述：图像图元对象

#### PCB_PrimitiveLine

- 类签名：export declare class PCB_PrimitiveLine implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 直线图元类
- 类备注：

##### create

- 方法签名：create (net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, lineWidth ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitiveLine | undefined > ;
- 方法修饰符：
- 方法描述：创建直线

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |
| layer | TPCB_LayersOfLine | 层 |
| startX | number | 起始位置 X |
| startY | number | 起始位置 Y |
| endX | number | 终止位置 X |
| endY | number | 终止位置 Y |
| lineWidth | number | (Optional) 线宽 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveLine | undefined>
- 返回值描述：直线图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveLine | Array < string > | Array < IPCB_PrimitiveLine >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveLine \| Array<string> \| Array< IPCB_PrimitiveLine > | 直线的图元 ID 或直线图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveLine | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 直线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveLine | undefined>
- 返回值描述：直线图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveLine >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 直线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine >>
- 返回值描述：直线图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (net ?: string, layer ?: TPCB_LayersOfLine, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveLine >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfLine | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveLine >>
- 返回值描述：直线图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (net ?: string, layer ?: TPCB_LayersOfLine, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfLine | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：折线的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveLine, property: { net?: string; layer ?: TPCB_LayersOfLine; startX ?: number; startY ?: number; endX ?: number; endY ?: number; lineWidth ?: number; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveLine | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveLine | 图元 ID |
| property | { net?: string; layer?: TPCB_LayersOfLine ; startX?: number; startY?: number; endX?: number; endY?: number; lineWidth?: number; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveLine | undefined>
- 返回值描述：直线图元对象

#### PCB_PrimitiveObject

- 类签名：export declare class PCB_PrimitiveObject implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 二进制内嵌对象图元类
- 类备注：

##### create

- 方法签名：create (layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation ?: number, mirror ?: boolean, fileName ?: string, primitiveLock ?: boolean): Promise < IPCB_PrimitiveObject | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfObject | 层 |
| topLeftX | number | 左上点 X |
| topLeftY | number | 左上点 Y |
| binaryData | string | 二进制数据 |
| width | number | 宽 |
| height | number | 高 |
| rotation | number | (Optional) 旋转角度 |
| mirror | boolean | (Optional) 是否水平镜像 |
| fileName | string | (Optional) 文件名 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveObject | undefined>
- 返回值描述：

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveObject | Array < string > | Array < IPCB_PrimitiveObject >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveObject \| Array<string> \| Array< IPCB_PrimitiveObject > | 二进制内嵌对象的图元 ID 或二进制内嵌对象图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveObject | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveObject | undefined>
- 返回值描述：二进制内嵌对象图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveObject >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveObject >>
- 返回值描述：二进制内嵌对象图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfObject, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveObject >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfObject | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveObject >>
- 返回值描述：二进制内嵌对象图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfObject, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfObject | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：二进制内嵌对象的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveObject, property: { layer?: TPCB_LayersOfObject; topLeftX ?: number; topLeftY ?: number; binaryData ?: string; width ?: number; height ?: number; rotation ?: number; mirror ?: boolean; fileName ?: string; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveObject | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveObject | 图元 ID |
| property | { layer?: TPCB_LayersOfObject ; topLeftX?: number; topLeftY?: number; binaryData?: string; width?: number; height?: number; rotation?: number; mirror?: boolean; fileName?: string; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveObject | undefined>
- 返回值描述：二进制内嵌对象图元对象， undefined 表示修改失败

#### PCB_PrimitivePad

- 类签名：export declare class PCB_PrimitivePad implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 焊盘图元类
- 类备注：

##### create

- 方法签名：create (layer: TPCB_LayersOfPad, padNumber: string, x: number, y: number, rotation ?: number, pad ?: TPCB_PrimitivePadShape, net ?: string, hole ?: TPCB_PrimitivePadHole | null , holeOffsetX ?: number, holeOffsetY ?: number, holeRotation ?: number, metallization ?: boolean, padType ?: EPCB_PrimitivePadType, specialPad ?: TPCB_PrimitiveSpecialPadShape, solderMaskAndPasteMaskExpansion ?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null , heatWelding ?: IPCB_PrimitivePadHeatWelding | null , primitiveLock ?: boolean): Promise < IPCB_PrimitivePad | undefined > ;
- 方法修饰符：
- 方法描述：创建焊盘

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfPad | 层 |
| padNumber | string | 焊盘编号 |
| x | number | 位置 X |
| y | number | 位置 Y |
| rotation | number | (Optional) 旋转角度 |
| pad | TPCB_PrimitivePadShape | (Optional) 焊盘外形 |
| net | string | (Optional) 网络名称 |
| hole | TPCB_PrimitivePadHole \| null | (Optional) 孔， null 标识无孔 |
| holeOffsetX | number | (Optional) 孔偏移 X |
| holeOffsetY | number | (Optional) 孔偏移 Y |
| holeRotation | number | (Optional) 孔相对于焊盘的旋转角度 |
| metallization | boolean | (Optional) 是否金属化孔壁 |
| padType | EPCB_PrimitivePadType | (Optional) 焊盘类型 |
| specialPad | TPCB_PrimitiveSpecialPadShape | (Optional) 特殊焊盘外形 |
| solderMaskAndPasteMaskExpansion | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion \| null | (Optional) 阻焊/助焊扩展， null 表示遵循规则 |
| heatWelding | IPCB_PrimitivePadHeatWelding \| null | (Optional) 热焊优化参数 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitivePad | undefined>
- 返回值描述：焊盘图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitivePad | Array < string > | Array < IPCB_PrimitivePad >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitivePad \| Array<string> \| Array< IPCB_PrimitivePad > | 焊盘的图元 ID 或焊盘图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitivePad | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 焊盘的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitivePad | undefined>
- 返回值描述：焊盘图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitivePad >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 焊盘的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitivePad >>
- 返回值描述：焊盘图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfPad, net ?: string, primitiveLock ?: boolean, padType ?: EPCB_PrimitivePadType): Promise < Array < IPCB_PrimitivePad >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfPad | (Optional) 层 |
| net | string | (Optional) 网络名称 |
| primitiveLock | boolean | (Optional) 是否锁定 |
| padType | EPCB_PrimitivePadType | (Optional) |

- 返回值类型：Promise<Array< IPCB_PrimitivePad >>
- 返回值描述：焊盘图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfPad, net ?: string, primitiveLock ?: boolean, padType ?: EPCB_PrimitivePadType): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfPad | (Optional) 层 |
| net | string | (Optional) 网络名称 |
| primitiveLock | boolean | (Optional) 是否锁定 |
| padType | EPCB_PrimitivePadType | (Optional) |

- 返回值类型：Promise<Array<string>>
- 返回值描述：焊盘的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitivePad, property: { layer?: TPCB_LayersOfPad; padNumber ?: string; x ?: number; y ?: number; rotation ?: number; pad ?: TPCB_PrimitivePadShape; net ?: string; hole ?: TPCB_PrimitivePadHole | null ; holeOffsetX ?: number; holeOffsetY ?: number; holeRotation ?: number; metallization ?: boolean; specialPad ?: TPCB_PrimitiveSpecialPadShape; solderMaskAndPasteMaskExpansion ?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null ; heatWelding ?: IPCB_PrimitivePadHeatWelding | null ; primitiveLock ?: boolean; }): Promise < IPCB_PrimitivePad | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitivePad | 图元 ID |
| property | { layer?: TPCB_LayersOfPad ; padNumber?: string; x?: number; y?: number; rotation?: number; pad?: TPCB_PrimitivePadShape ; net?: string; hole?: TPCB_PrimitivePadHole \| null; holeOffsetX?: number; holeOffsetY?: number; holeRotation?: number; metallization?: boolean; specialPad?: TPCB_PrimitiveSpecialPadShape ; solderMaskAndPasteMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion \| null; heatWelding?: IPCB_PrimitivePadHeatWelding \| null; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitivePad | undefined>
- 返回值描述：焊盘图元对象

#### PCB_PrimitivePolyline

- 类签名：export declare class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 折线图元类
- 类备注：

##### create

- 方法签名：create (net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitivePolyline | undefined > ;
- 方法修饰符：
- 方法描述：创建折线

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |
| layer | TPCB_LayersOfLine | 层 |
| polygon | IPCB_Polygon | 单多边形对象 |
| lineWidth | number | (Optional) 线宽 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitivePolyline | undefined>
- 返回值描述：折线图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitivePolyline | Array < string > | Array < IPCB_PrimitivePolyline >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitivePolyline \| Array<string> \| Array< IPCB_PrimitivePolyline > | 折线的图元 ID 或折线图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitivePolyline | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitivePolyline | undefined>
- 返回值描述：折线图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitivePolyline >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitivePolyline >>
- 返回值描述：折线图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (net ?: string, layer ?: TPCB_LayersOfLine, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitivePolyline >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfLine | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitivePolyline >>
- 返回值描述：折线图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (net ?: string, layer ?: TPCB_LayersOfLine, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfLine | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：折线的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitivePolyline, property: { net?: string; layer ?: TPCB_LayersOfLine; polygon ?: IPCB_Polygon; lineWidth ?: number; primitiveLock ?: boolean; }): Promise < IPCB_PrimitivePolyline | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitivePolyline | 图元 ID |
| property | { net?: string; layer?: TPCB_LayersOfLine ; polygon?: IPCB_Polygon ; lineWidth?: number; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitivePolyline | undefined>
- 返回值描述：折线图元对象

#### PCB_PrimitivePour

- 类签名：export declare class PCB_PrimitivePour implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 覆铜边框图元类
- 类备注：

##### create

- 方法签名：create (net: string, layer: TPCB_LayersOfCopper, complexPolygon: IPCB_Polygon, pourFillMethod ?: EPCB_PrimitivePourFillMethod, preserveSilos ?: boolean, pourName ?: string, pourPriority ?: number, lineWidth ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitivePour | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |
| layer | TPCB_LayersOfCopper | 层 |
| complexPolygon | IPCB_Polygon | 复杂多边形对象 |
| pourFillMethod | EPCB_PrimitivePourFillMethod | (Optional) 覆铜填充方法 |
| preserveSilos | boolean | (Optional) 是否保留孤岛 |
| pourName | string | (Optional) 覆铜名称 |
| pourPriority | number | (Optional) 覆铜优先级 |
| lineWidth | number | (Optional) 线宽 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitivePour | undefined>
- 返回值描述：覆铜边框图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitivePour | Array < string > | Array < IPCB_PrimitivePour >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitivePour \| Array<string> \| Array< IPCB_PrimitivePour > | 覆铜边框的图元 ID 或覆铜边框图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitivePour | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 覆铜边框的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitivePour | undefined>
- 返回值描述：覆铜边框图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitivePour >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 覆铜边框的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitivePour >>
- 返回值描述：覆铜边框图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (net ?: string, layer ?: TPCB_LayersOfCopper, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitivePour >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfCopper | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitivePour >>
- 返回值描述：覆铜边框图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (net ?: string, layer ?: TPCB_LayersOfCopper, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| layer | TPCB_LayersOfCopper | (Optional) 层 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：覆铜边框的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitivePour, property: { net?: string; layer ?: TPCB_LayersOfCopper; complexPolygon ?: IPCB_Polygon; pourFillMethod ?: EPCB_PrimitivePourFillMethod; preserveSilos ?: boolean; pourName ?: string; pourPriority ?: number; lineWidth ?: number; primitiveLock ?: boolean; }): Promise < IPCB_PrimitivePour | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitivePour | 图元 ID |
| property | { net?: string; layer?: TPCB_LayersOfCopper ; complexPolygon?: IPCB_Polygon ; pourFillMethod?: EPCB_PrimitivePourFillMethod ; preserveSilos?: boolean; pourName?: string; pourPriority?: number; lineWidth?: number; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitivePour | undefined>
- 返回值描述：覆铜边框图元对象， undefined 表示修改失败

#### PCB_PrimitivePoured

- 类签名：export declare class PCB_PrimitivePoured implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 覆铜填充图元类
- 类备注：

- 无方法

#### PCB_PrimitiveRegion

- 类签名：export declare class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 禁止区域和约束区域图元类
- 类备注：

##### create

- 方法签名：create (layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType ?: Array < EPCB_PrimitiveRegionRuleType > , regionName ?: string, lineWidth ?: number, primitiveLock ?: boolean): Promise < IPCB_PrimitiveRegion | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfRegion | 层 |
| complexPolygon | IPCB_Polygon | 复杂多边形对象 |
| ruleType | Array< EPCB_PrimitiveRegionRuleType > | (Optional) 区域规则类型 |
| regionName | string | (Optional) 区域名称 |
| lineWidth | number | (Optional) 线宽 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveRegion | undefined>
- 返回值描述：区域图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveRegion | Array < string > | Array < IPCB_PrimitiveRegion >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveRegion \| Array<string> \| Array< IPCB_PrimitiveRegion > | 区域的图元 ID 或区域图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveRegion | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 区域的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveRegion | undefined>
- 返回值描述：区域图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveRegion >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 区域的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveRegion >>
- 返回值描述：区域图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (layer ?: TPCB_LayersOfRegion, ruleType ?: Array < EPCB_PrimitiveRegionRuleType > , primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveRegion >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfRegion | (Optional) 层 |
| ruleType | Array< EPCB_PrimitiveRegionRuleType > | (Optional) 区域规则类型，只会匹配所有规则类型均一致的图元 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveRegion >>
- 返回值描述：区域图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (layer ?: TPCB_LayersOfRegion, ruleType ?: Array < EPCB_PrimitiveRegionRuleType > , primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| layer | TPCB_LayersOfRegion | (Optional) 层 |
| ruleType | Array< EPCB_PrimitiveRegionRuleType > | (Optional) 区域规则类型，只会匹配所有规则类型均一致的图元 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：区域的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveRegion, property: { layer?: TPCB_LayersOfRegion; complexPolygon ?: IPCB_Polygon; ruleType ?: Array < EPCB_PrimitiveRegionRuleType > ; regionName ?: string; lineWidth ?: number; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveRegion | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveRegion | 图元 ID |
| property | { layer?: TPCB_LayersOfRegion ; complexPolygon?: IPCB_Polygon ; ruleType?: Array< EPCB_PrimitiveRegionRuleType >; regionName?: string; lineWidth?: number; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveRegion | undefined>
- 返回值描述：区域图元对象， undefined 表示修改失败

#### PCB_PrimitiveString

- 类签名：export declare class PCB_PrimitiveString implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 文本图元类
- 类备注：

- 无方法

#### PCB_PrimitiveVia

- 类签名：export declare class PCB_PrimitiveVia implements IPCB_PrimitiveAPI
- 类描述：PCB & 封装 / 过孔图元类
- 类备注：

##### create

- 方法签名：create (net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType ?: EPCB_PrimitiveViaType, designRuleBlindViaName ?: string | null , solderMaskExpansion ?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null , primitiveLock ?: boolean): Promise < IPCB_PrimitiveVia | undefined > ;
- 方法修饰符：
- 方法描述：创建过孔

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | 网络名称 |
| x | number | 坐标 X |
| y | number | 坐标 Y |
| holeDiameter | number | 孔径 |
| diameter | number | 外径 |
| viaType | EPCB_PrimitiveViaType | (Optional) 过孔类型 |
| designRuleBlindViaName | string \| null | (Optional) 盲埋孔设计规则项名称，定义过孔的开始层与结束层， null 表示非盲埋孔 |
| solderMaskExpansion | IPCB_PrimitiveSolderMaskAndPasteMaskExpansion \| null | (Optional) 阻焊/助焊扩展， null 表示跟随规则 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise< IPCB_PrimitiveVia | undefined>
- 返回值描述：过孔图元对象

##### delete

- 方法签名：delete ( primitiveIds : string | IPCB_PrimitiveVia | Array < string > | Array < IPCB_PrimitiveVia >) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| IPCB_PrimitiveVia \| Array<string> \| Array< IPCB_PrimitiveVia > | 过孔的图元 ID 或过孔图元对象 |

- 返回值类型：Promise<boolean>
- 返回值描述：删除操作是否成功

##### get

- 方法签名：get (primitiveIds: string): Promise < IPCB_PrimitiveVia | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string | 过孔的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise< IPCB_PrimitiveVia | undefined>
- 返回值描述：过孔图元对象， undefined 表示获取失败

##### get

- 方法签名：get (primitiveIds: Array < string > ): Promise < Array < IPCB_PrimitiveVia >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | Array<string> | 过孔的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

- 返回值类型：Promise<Array< IPCB_PrimitiveVia >>
- 返回值描述：过孔图元对象，空数组表示获取失败

##### getAll

- 方法签名：getAll (net ?: string, primitiveLock ?: boolean): Promise < Array < IPCB_PrimitiveVia >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array< IPCB_PrimitiveVia >>
- 返回值描述：过孔图元对象数组

##### getAllPrimitiveId

- 方法签名：getAllPrimitiveId (net ?: string, primitiveLock ?: boolean): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| net | string | (Optional) 网络名称 |
| primitiveLock | boolean | (Optional) 是否锁定 |

- 返回值类型：Promise<Array<string>>
- 返回值描述：过孔的图元 ID 数组

##### modify

- 方法签名：modify (primitiveId: string | IPCB_PrimitiveVia, property: { net?: string; x ?: number; y ?: number; holeDiameter ?: number; diameter ?: number; viaType ?: EPCB_PrimitiveViaType; designRuleBlindViaName ?: string | null ; solderMaskExpansion ?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null ; primitiveLock ?: boolean; }): Promise < IPCB_PrimitiveVia | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveId | string \| IPCB_PrimitiveVia | 图元 ID |
| property | { net?: string; x?: number; y?: number; holeDiameter?: number; diameter?: number; viaType?: EPCB_PrimitiveViaType ; designRuleBlindViaName?: string \| null; solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion \| null; primitiveLock?: boolean; } | 修改参数 |

- 返回值类型：Promise< IPCB_PrimitiveVia | undefined>
- 返回值描述：过孔图元对象

#### PCB_SelectControl

- 类签名：export declare class PCB_SelectControl
- 类描述：PCB & 封装 / 选择控制类
- 类备注：

##### clearSelected

- 方法签名：clearSelected (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### doCrossProbeSelect

- 方法签名：doCrossProbeSelect (components ?: Array < string > , pins ?: Array < string > , nets ?: Array < string > , highlight ?: boolean, select ?: boolean): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| components | Array<string> | (Optional) 器件位号 |
| pins | Array<string> | (Optional) 器件位号_引脚编号，格式为 ['U1_1', 'U1_2'] |
| nets | Array<string> | (Optional) 网络名称 |
| highlight | boolean | (Optional) 是否高亮 |
| select | boolean | (Optional) 操作是否成功 |

- 返回值类型：Promise<boolean>
- 返回值描述：

##### doSelectPrimitives

- 方法签名：doSelectPrimitives (primitiveIds: string | Array < string > ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| primitiveIds | string \| Array<string> | 图元 ID |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllSelectedPrimitives

- 方法签名：getAllSelectedPrimitives (): Promise < Array < IPCB_Primitive >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array< IPCB_Primitive >>
- 返回值描述：所有已选中图元的图元对象

##### getAllSelectedPrimitives_PrimitiveId

- 方法签名：getAllSelectedPrimitives_PrimitiveId (): Promise < Array < string >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<string>>
- 返回值描述：所有已选中图元的图元 ID

##### getCurrentMousePosition

- 方法签名：getCurrentMousePosition (): Promise <{ x : number ; y : number ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<{ x: number; y: number; } | undefined>
- 返回值描述：鼠标在画布上的位置， undefined 代表当前鼠标不在画布上

##### getSelectedPrimitives

- 方法签名：getSelectedPrimitives (): Promise < Array < Object >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<Array<Object>>
- 返回值描述：选中图元的所有参数

### 枚举

#### EPCB_DocumentRatlineCalculatingActiveStatus

- 枚举签名：export declare enum EPCB_DocumentRatlineCalculatingActiveStatus
- 枚举描述：文档飞线计算功能状态
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ACTIVE | "active" | 启用 |
| INACTIVE | "inactive" | 停用 |

#### EPCB_InactiveLayerDisplayMode

- 枚举签名：export declare enum EPCB_InactiveLayerDisplayMode
- 枚举描述：非激活层展示模式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| HIDE | 2 | 隐藏 |
| NORMAL_BRIGHTNESS | 0 | 正常亮度 |
| TURN_GRAY | 1 | 置灰 |

#### EPCB_LayerColorConfiguration

- 枚举签名：export declare enum EPCB_LayerColorConfiguration
- 枚举描述：图层颜色配置
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ALTIUM_DESIGNER | 2 | Altium Designer |
| EASYEDA | 1 | EasyEDA |
| JLCEDA | 1 | 嘉立创 EDA |
| KICAD | 4 | KiCAD |
| PADS | 3 | PADS |

#### EPCB_LayerId

- 枚举签名：export declare enum EPCB_LayerId
- 枚举描述：图层 ID
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BOARD_OUTLINE | 11 | 板框层 |
| BOTTOM | 2 | 底层 |
| BOTTOM_ASSEMBLY | 10 | 底层装配层 |
| BOTTOM_PASTE_MASK | 8 | 底层锡膏（助焊）层 |
| BOTTOM_SILKSCREEN | 4 | 底层丝印层 |
| BOTTOM_SOLDER_MASK | 6 | 底层阻焊层 |
| BOTTOM_STIFFENER | 59 | 底层 FPC 补强层 |
| COMPONENT_MARKING | 49 | 元件标识层 |
| COMPONENT_MODEL | 52 | 元件模型层 |
| COMPONENT_SHAPE | 48 | 元件外形层 |
| CUSTOM_1 | 71 | 自定义层 1 |
| CUSTOM_10 | 80 | 自定义层 10 |
| CUSTOM_11 | 81 | 自定义层 11 |
| CUSTOM_12 | 82 | 自定义层 12 |
| CUSTOM_13 | 83 | 自定义层 13 |
| CUSTOM_14 | 84 | 自定义层 14 |
| CUSTOM_15 | 85 | 自定义层 15 |
| CUSTOM_16 | 86 | 自定义层 16 |
| CUSTOM_17 | 87 | 自定义层 17 |
| CUSTOM_18 | 88 | 自定义层 18 |
| CUSTOM_19 | 89 | 自定义层 19 |
| CUSTOM_2 | 72 | 自定义层 2 |
| CUSTOM_20 | 90 | 自定义层 20 |
| CUSTOM_21 | 91 | 自定义层 21 |
| CUSTOM_22 | 92 | 自定义层 22 |
| CUSTOM_23 | 93 | 自定义层 23 |
| CUSTOM_24 | 94 | 自定义层 24 |
| CUSTOM_25 | 95 | 自定义层 25 |
| CUSTOM_26 | 96 | 自定义层 26 |
| CUSTOM_27 | 97 | 自定义层 27 |
| CUSTOM_28 | 98 | 自定义层 28 |
| CUSTOM_29 | 99 | 自定义层 29 |
| CUSTOM_3 | 73 | 自定义层 3 |
| CUSTOM_30 | 100 | 自定义层 30 |
| CUSTOM_4 | 74 | 自定义层 4 |
| CUSTOM_5 | 75 | 自定义层 5 |
| CUSTOM_6 | 76 | 自定义层 6 |
| CUSTOM_7 | 77 | 自定义层 7 |
| CUSTOM_8 | 78 | 自定义层 8 |
| CUSTOM_9 | 79 | 自定义层 9 |
| DOCUMENT | 13 | 文档层 |
| DRILL_DRAWING | 56 | 钻孔图层 |
| HOLE | 47 | 孔层（焊盘、过孔的内孔） |
| INNER_1 | 15 | 内层 1 |
| INNER_10 | 24 | 内层 10 |
| INNER_11 | 25 | 内层 11 |
| INNER_12 | 26 | 内层 12 |
| INNER_13 | 27 | 内层 13 |
| INNER_14 | 28 | 内层 14 |
| INNER_15 | 29 | 内层 15 |
| INNER_16 | 30 | 内层 16 |
| INNER_17 | 31 | 内层 17 |
| INNER_18 | 32 | 内层 18 |
| INNER_19 | 33 | 内层 19 |
| INNER_2 | 16 | 内层 2 |
| INNER_20 | 34 | 内层 20 |
| INNER_21 | 35 | 内层 21 |
| INNER_22 | 36 | 内层 22 |
| INNER_23 | 37 | 内层 23 |
| INNER_24 | 38 | 内层 24 |
| INNER_25 | 39 | 内层 25 |
| INNER_26 | 40 | 内层 26 |
| INNER_27 | 41 | 内层 27 |
| INNER_28 | 42 | 内层 28 |
| INNER_29 | 43 | 内层 29 |
| INNER_3 | 17 | 内层 3 |
| INNER_30 | 44 | 内层 30 |
| INNER_31 | 45 | 内层 31 |
| INNER_32 | 46 | 内层 32 |
| INNER_4 | 18 | 内层 4 |
| INNER_5 | 19 | 内层 5 |
| INNER_6 | 20 | 内层 6 |
| INNER_7 | 21 | 内层 7 |
| INNER_8 | 22 | 内层 8 |
| INNER_9 | 23 | 内层 9 |
| MECHANICAL | 14 | 机械层 |
| MULTI | 12 | 多层 |
| PIN_FLOATING | 51 | 引脚悬空层 |
| PIN_SOLDERING | 50 | 引脚焊接层 |
| RATLINE | 57 | 飞线层 |
| SHELL_3D_BOTTOM | 55 | 3D 外壳底层 |
| SHELL_3D_OUTLINE | 53 | 3D 外壳边框层 |
| SHELL_3D_TOP | 54 | 3D 外壳顶层 |
| SUBSTRATE_1 | 101 | 夹层（介电基板）1 |
| TOP | 1 | 顶层 |
| TOP_ASSEMBLY | 9 | 顶层装配层 |
| TOP_PASTE_MASK | 7 | 顶层锡膏（助焊）层 |
| TOP_SILKSCREEN | 3 | 顶层丝印层 |
| TOP_SOLDER_MASK | 5 | 顶层阻焊层 |
| TOP_STIFFENER | 58 | 顶层 FPC 补强层 |

#### EPCB_LayerType

- 枚举签名：export declare enum EPCB_LayerType
- 枚举描述：图层类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ASSEMBLY | "ASSEMBLY" | 装配层 |
| CUSTOM | "CUSTOM" | 自定义层 |
| INTERNAL_ELECTRICAL | "PLANE" | 内电层 |
| OTHER | "OTHER" | 其它 |
| PASTE_MASK | "PASTE_MASK" | 锡膏（助焊）层 |
| SIGNAL | "SIGNAL" | 信号层 |
| SILKSCREEN | "SILKSCREEN" | 丝印层 |
| SOLDER_MASK | "SOLDER_MASK" | 阻焊层 |

#### EPCB_PcbPlateType

- 枚举签名：export declare enum EPCB_PcbPlateType
- 枚举描述：PCB 板材类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| FPC | 2 | FPC 软板 |
| NORMAL | 1 | 普通板材 |

#### EPCB_PdfOutputMethod

- 枚举签名：export declare enum EPCB_PdfOutputMethod
- 枚举描述：PDF 输出方式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| MULTI_PAGE_PDF | "A Multi Page PDF" | 单个多页 PDF |
| MULTIPLE_SINGLE_PAGE_PDF | "Multiple Single Page PDF" | 多个单页 PDF（将会输出包含所有分解图层 PDF 文件的压缩包） |
| SINGLE_PAGE_PDF | "A Single Page PDF" | 单个单页 PDF（将会输出包含每层一个 PDF 文件的压缩包） |

#### EPCB_PrimitiveArcInteractiveMode

- 枚举签名：export declare enum EPCB_PrimitiveArcInteractiveMode
- 枚举描述：圆弧交互模式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| CENTER_ARC | 2 | 中心圆弧交互 |
| TWO_POINT_ARC | 1 | 两点圆弧交互 |

#### EPCB_PrimitiveDimensionType

- 枚举签名：export declare enum EPCB_PrimitiveDimensionType
- 枚举描述：尺寸标注类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ANGLE | "Protractor Dimension" | 角度 |
| LENGTH | "Length Dimension" | 长度 |
| RADIUS | "Radius Dimension" | 半径 |

#### EPCB_PrimitiveFillMode

- 枚举签名：export declare enum EPCB_PrimitiveFillMode
- 枚举描述：填充图元填充模式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| INNER_ELECTRICAL_LAYER | 2 | 内电层填充 |
| MESH | 1 | 网格填充 |
| SOLID | 0 | 实心填充 |

#### EPCB_PrimitivePadHeatWeldingConnectionMethod

- 枚举签名：export declare enum EPCB_PrimitivePadHeatWeldingConnectionMethod
- 枚举描述：焊盘热焊连接方式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| DIRECT_CONNECTED | "Direct-connected" | 直连 |
| DIVERGENT | "Divergent" | 发散 |
| NON_CONNECTED | "Non-connected" | 无连接 |

#### EPCB_PrimitivePadHoleType

- 枚举签名：export declare enum EPCB_PrimitivePadHoleType
- 枚举描述：焊盘钻孔类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| RECTANGLE | "RECT" | 矩形 |
| ROUND | "ROUND" | 长圆形 |

#### EPCB_PrimitivePadShapeType

- 枚举签名：export declare enum EPCB_PrimitivePadShapeType
- 枚举描述：焊盘外形种类
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ELLIPSE | "ELLIPSE" | 圆形 |
| OBLONG | "OVAL" | 长圆形 |
| POLYLINE_COMPLEX_POLYGON | "POLYGON" | 折线复杂多边形 |
| RECTANGLE | "RECT" | 矩形 |
| REGULAR_POLYGON | "NGON" | 正多边形 |

#### EPCB_PrimitivePadType

- 枚举签名：export declare enum EPCB_PrimitivePadType
- 枚举描述：焊盘类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| MARK_POINT | 2 | 标识点 |
| NORMAL | 0 | 焊盘 |
| TEST | 1 | 测试点 |

#### EPCB_PrimitivePourFillMethod

- 枚举签名：export declare enum EPCB_PrimitivePourFillMethod
- 枚举描述：覆铜填充方法
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| GRID | "90grid" | 90 度网格 |
| GRID45 | "45grid" | 45 度网格 |
| SOLID | "solid" | 实心填充 |

#### EPCB_PrimitiveRegionRuleType

- 枚举签名：export declare enum EPCB_PrimitiveRegionRuleType
- 枚举描述：区域图元区域规则类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| FOLLOW_REGION_RULE | 9 | 约束区域 |
| NO_COMPONENTS | 2 | 禁止元件 |
| NO_FILLS | 6 | 禁止填充 |
| NO_INNER_ELECTRICAL_LAYERS | 8 | 禁止内电层 |
| NO_POURS | 7 | 禁止覆铜 |
| NO_VIAS | 3 | 禁止过孔 |
| NO_WIRES | 5 | 禁止布线 |

#### EPCB_PrimitiveStringAlignMode

- 枚举签名：export declare enum EPCB_PrimitiveStringAlignMode
- 枚举描述：文本对齐模式
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| CENTER | 5 | 中心 |
| CENTER_BOTTOM | 6 | 中下 |
| CENTER_TOP | 4 | 中上 |
| LEFT_BOTTOM | 3 | 左下 |
| LEFT_MIDDLE | 2 | 左中 |
| LEFT_TOP | 1 | 左上 |
| RIGHT_BOTTOM | 9 | 右下 |
| RIGHT_MIDDLE | 8 | 右中 |
| RIGHT_TOP | 7 | 右上 |

#### EPCB_PrimitiveType

- 枚举签名：export declare enum EPCB_PrimitiveType
- 枚举描述：图元类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| ARC | "Arc" | 圆弧线 |
| ATTRIBUTE | "Attribute" | 属性 |
| COMPONENT | "Component" | 器件 |
| COMPONENT_PAD | "ComponentPad" | 器件焊盘 |
| DIMENSION | "Dimension" | 尺寸标注 |
| FILL | "Fill" | 填充 |
| IMAGE | "Image" | 图像 |
| LINE | "Line" | 直线 |
| OBJECT | "Object" | 二进制内嵌对象 |
| PAD | "Pad" | 焊盘 |
| POLYLINE | "Polyline" | 折线 |
| POUR | "Pour" | 覆铜边框 |
| POURED | "Poured" | 覆铜填充 |
| REGION | "Region" | 区域 |
| STRING | "String" | 文本 |
| VIA | "Via" | 过孔 |

#### EPCB_PrimitiveViaType

- 枚举签名：export declare enum EPCB_PrimitiveViaType
- 枚举描述：过孔类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| BLIND | 1 | 盲埋孔 |
| SUTURE | 2 | 缝合孔 |
| VIA | 0 | 通孔 |

### 接口

#### IPCB_BomPropertiesTableColumns

- 接口签名：export interface IPCB_BomPropertiesTableColumns
- 接口描述：BOM 列的属性及排序规则
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| group |  | null \| 'Yes' \| 'No' | 是否分组 |
| orderWeight |  | number | 排列权重（大权重优先在 BOM 的左侧） |
| property |  | string | 属性 |
| sort |  | null \| 'asc' \| 'desc' | 排序规则 |
| title |  | string | 显示名称 |

接口方法：

- 无

#### IPCB_DifferentialPairItem

- 接口签名：export interface IPCB_DifferentialPairItem
- 接口描述：差分对属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| name |  | string | 差分对名称 |
| negativeNet |  | string | 负网络 |
| positiveNet |  | string | 正网络 |

接口方法：

- 无

#### IPCB_EqualLengthNetGroupItem

- 接口签名：export interface IPCB_EqualLengthNetGroupItem
- 接口描述：等长网络组属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| color |  | { r : number | 等长网络组颜色 |
| name |  | string | 等长网络组名称 |
| nets |  | Array < string > | 网络名称数组 |

接口方法：

- 无

#### IPCB_LayerItem

- 接口签名：export interface IPCB_LayerItem
- 接口描述：图层属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| color |  | string | 颜色（RGB HEX 格式） |
| id |  | EPCB_LayerId | 图层 ID |
| inactiveColor |  | string | 非激活颜色（RGB HEX 格式） |
| inactiveTransparency |  | number | 非激活透明度（%） |
| layerStatus |  | ELayerStatus | 层状态 |
| locked |  | boolean | 是否锁定 |
| name |  | string | 名称 |
| transparency |  | number | 透明度（%） |
| type |  | EPCB_LayerType | 类型 |

接口方法：

- 无

#### IPCB_NetClassItem

- 接口签名：export interface IPCB_NetClassItem
- 接口描述：网络类属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| color |  | { r : number | 网络类颜色 |
| name |  | string | 网络类名称 |
| nets |  | Array < string > | 网络名称数组 |

接口方法：

- 无

#### IPCB_NetInfo

- 接口签名：export interface IPCB_NetInfo
- 接口描述：网络属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| color |  | { r : number | 颜色 |
| length |  | number | 长度 |
| net |  | string | 网络名称 |

接口方法：

- 无

#### IPCB_PadPairGroupItem

- 接口签名：export interface IPCB_PadPairGroupItem
- 接口描述：焊盘对组属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| name |  | string | 焊盘对组名称 |
| padPairs |  | Array < [string, string] > | 焊盘对数组 |

接口方法：

- 无

#### IPCB_PadPairMinWireLengthItem

- 接口签名：export interface IPCB_PadPairMinWireLengthItem
- 接口描述：焊盘对最短导线长度属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| minWireLength |  | number | 最短导线长度 |
| padPair |  | [string, string] | 焊盘对数组 |

接口方法：

- 无

#### IPCB_Primitive

- 接口签名：export interface IPCB_Primitive
- 接口描述：PCB 图元
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| create |  | () => IPCB_Primitive \| Promise < IPCB_Primitive > |  |
| done |  | () => IPCB_Primitive \| Promise < IPCB_Primitive > |  |
| getState_PrimitiveId |  | () => string |  |
| getState_PrimitiveType |  | () => EPCB_PrimitiveType |  |
| isAsync |  | () => boolean |  |
| reset |  | () => IPCB_Primitive \| Promise < IPCB_Primitive > |  |
| toAsync |  | () => IPCB_Primitive |  |
| toSync |  | () => IPCB_Primitive |  |

接口方法：

- 无

#### IPCB_PrimitiveAPI

- 接口签名：export interface IPCB_PrimitiveAPI
- 接口描述：PCB 图元接口
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| create |  | ( ... args : any []) => IPCB_Primitive \| undefined \| Promise < IPCB_Primitive > \| Promise < IPCB_Primitive \| undefined > |  |
| delete |  | ( primitiveIds : string \| any \| Array < string > \| Array < any >) => boolean \| Promise < boolean > |  |
| get |  | IPCB_Primitive \| undefined \| Promise < IPCB_Primitive \| undefined > |  |
| getAll |  | ( ... args : any []) => Array < IPCB_Primitive > \| Promise < Array < IPCB_Primitive >> |  |
| getAllPrimitiveId |  | ( ... args : any []) => Array < string > \| Promise < Array < string >> |  |
| modify |  | ( primitiveId : string \| any , ... args : any []) => IPCB_Primitive \| undefined \| Promise < IPCB_Primitive > \| Promise < IPCB_Primitive \| undefined > |  |

接口方法：

- 无

#### IPCB_PrimitivePouredPourFill

- 接口签名：export interface IPCB_PrimitivePouredPourFill
- 接口描述：覆铜填充区域
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| fill |  | boolean | 是否填充 |
| id |  | string | ID |
| lineWidth |  | number | 线宽 |
| path |  | IPCB_ComplexPolygon | 复杂多边形 |

接口方法：

- 无

#### IPCB_PrimitiveSolderMaskAndPasteMaskExpansion

- 接口签名：export interface IPCB_PrimitiveSolderMaskAndPasteMaskExpansion
- 接口描述：阻焊/助焊扩展
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| bottomPasteMask |  | number | 底层助焊扩展 |
| bottomSolderMask |  | number | 底层阻焊扩展 |
| topPasteMask |  | number | 顶层助焊扩展 |
| topSolderMask |  | number | 顶层阻焊扩展 |

接口方法：

- 无

### 图元类

| 图元类名 | 描述 | 方法数量 |
|---|---|---:|
| IPCB_PrimitiveArc | 圆弧线图元 | 30 |
| IPCB_PrimitiveComponent | 器件图元 | 40 |
| IPCB_PrimitiveComponentPad | 器件焊盘图元 | 3 |
| IPCB_PrimitiveDimension | 尺寸标注图元 | 22 |
| IPCB_PrimitiveFill | 填充图元 | 22 |
| IPCB_PrimitiveImage | 图像图元 | 24 |
| IPCB_PrimitiveLine | 直线图元 | 26 |
| IPCB_PrimitiveObject | 二进制内嵌对象图元 | 27 |
| IPCB_PrimitivePad | 焊盘图元 | 61 |
| IPCB_PrimitivePolyline | 折线图元 | 20 |
| IPCB_PrimitivePour | 覆铜边框图元 | 28 |
| IPCB_PrimitivePoured | 覆铜填充图元 | 4 |
| IPCB_PrimitiveRegion | 区域图元 | 22 |
| IPCB_PrimitiveString | 文本图元 | 32 |
| IPCB_PrimitiveVia | 过孔图元 | 26 |
| PCB_Primitive | PCB & 封装 / 图元类 | 1 |
| PCB_PrimitiveArc | PCB & 封装 / 圆弧线图元类 | 7 |
| PCB_PrimitiveAttribute | PCB & 封装 / 属性图元类 | 0 |
| PCB_PrimitiveComponent | PCB & 封装 / 器件图元类 | 8 |
| PCB_PrimitiveDimension | PCB & 封装 / 尺寸标注图元类 | 7 |
| PCB_PrimitiveFill | PCB & 封装 / 填充图元类 | 7 |
| PCB_PrimitiveImage | PCB & 封装 / 图像图元类 | 7 |
| PCB_PrimitiveLine | PCB & 封装 / 直线图元类 | 7 |
| PCB_PrimitiveObject | PCB & 封装 / 二进制内嵌对象图元类 | 7 |
| PCB_PrimitivePad | PCB & 封装 / 焊盘图元类 | 7 |
| PCB_PrimitivePolyline | PCB & 封装 / 折线图元类 | 7 |
| PCB_PrimitivePour | PCB & 封装 / 覆铜边框图元类 | 7 |
| PCB_PrimitivePoured | PCB & 封装 / 覆铜填充图元类 | 0 |
| PCB_PrimitiveRegion | PCB & 封装 / 禁止区域和约束区域图元类 | 7 |
| PCB_PrimitiveString | PCB & 封装 / 文本图元类 | 0 |
| PCB_PrimitiveVia | PCB & 封装 / 过孔图元类 | 7 |

### 类型别名

| 类型别名 | 签名 | 描述 |
|---|---|---|
| TPCB_LayerTypesOfInnerLayer | export type TPCB_LayerTypesOfInnerLayer = EPCB_LayerType . SIGNAL \| EPCB_LayerType . INTERNAL_ELECTRICAL ; | 内层允许设置的图层类型 |
| TPCB_LayersInTheSelectable | export type TPCB_LayersInTheSelectable = \| TPCB_LayersOfInner \| TPCB_LayersOfCustom \| EPCB_LayerId . TOP \| EPCB_LayerId . TOP_SILKSCREEN \| EPCB_LayerId . TOP_SOLDER_MASK \| EPCB_LayerId . TOP_PASTE_MASK \| EPCB_LayerId . TOP_ASSEMBLY \| EPCB_LayerId . TOP_STIFFENER \| EPCB_LayerId . BOTTOM \| EPCB_LayerId . BOTTOM_SILKSCREEN \| EPCB_LayerId . BOTTOM_SOLDER_MASK \| EPCB_LayerId . BOTTOM_PASTE_MASK \| EPCB_LayerId . BOTTOM_ASSEMBLY \| EPCB_LayerId . BOTTOM_STIFFENER \| EPCB_LayerId . BOARD_OUTLINE \| EPCB_LayerId . MULTI \| EPCB_LayerId . DOCUMENT \| EPCB_LayerId . MECHANICAL \| EPCB_LayerId . DRILL_DRAWING \| EPCB_LayerId . RATLINE \| EPCB_LayerId . COMPONENT_SHAPE \| EPCB_LayerId . COMPONENT_MARKING \| EPCB_LayerId . PIN_SOLDERING \| EPCB_LayerId . PIN_FLOATING \| EPCB_LayerId . SHELL_3D_OUTLINE \| EPCB_LayerId . SHELL_3D_TOP \| EPCB_LayerId . SHELL_3D_BOTTOM ; | 可选中图层 |
| TPCB_LayersOfComponent | export type TPCB_LayersOfComponent = EPCB_LayerId . TOP \| EPCB_LayerId . BOTTOM ; | 器件所属层 |
| TPCB_LayersOfCopper | export type TPCB_LayersOfCopper = TPCB_LayersOfInner \| EPCB_LayerId . TOP \| EPCB_LayerId . BOTTOM ; | 铜箔所属层 |
| TPCB_LayersOfCustom | export type TPCB_LayersOfCustom = \| EPCB_LayerId . CUSTOM_1 \| EPCB_LayerId . CUSTOM_2 \| EPCB_LayerId . CUSTOM_3 \| EPCB_LayerId . CUSTOM_4 \| EPCB_LayerId . CUSTOM_5 \| EPCB_LayerId . CUSTOM_6 \| EPCB_LayerId . CUSTOM_7 \| EPCB_LayerId . CUSTOM_8 \| EPCB_LayerId . CUSTOM_9 \| EPCB_LayerId . CUSTOM_10 \| EPCB_LayerId . CUSTOM_11 \| EPCB_LayerId . CUSTOM_12 \| EPCB_LayerId . CUSTOM_13 \| EPCB_LayerId . CUSTOM_14 \| EPCB_LayerId . CUSTOM_15 \| EPCB_LayerId . CUSTOM_16 \| EPCB_LayerId . CUSTOM_17 \| EPCB_LayerId . CUSTOM_18 \| EPCB_LayerId . CUSTOM_19 \| EPCB_LayerId . CUSTOM_20 \| EPCB_LayerId . CUSTOM_21 \| EPCB_LayerId . CUSTOM_22 \| EPCB_LayerId . CUSTOM_23 \| EPCB_LayerId . CUSTOM_24 \| EPCB_LayerId . CUSTOM_25 \| EPCB_LayerId . CUSTOM_26 \| EPCB_LayerId . CUSTOM_27 \| EPCB_LayerId . CUSTOM_28 \| EPCB_LayerId . CUSTOM_29 \| EPCB_LayerId . CUSTOM_30 ; | 自定义层 |
| TPCB_LayersOfDimension | export type TPCB_LayersOfDimension = \| TPCB_LayersOfCustom \| EPCB_LayerId . TOP_SILKSCREEN \| EPCB_LayerId . BOTTOM_SILKSCREEN \| EPCB_LayerId . DOCUMENT \| EPCB_LayerId . MECHANICAL ; | 尺寸标注所属层 |
| TPCB_LayersOfFill | export type TPCB_LayersOfFill = \| TPCB_LayersOfCopper \| TPCB_LayersOfCustom \| EPCB_LayerId . TOP_SILKSCREEN \| EPCB_LayerId . TOP_SOLDER_MASK \| EPCB_LayerId . TOP_PASTE_MASK \| EPCB_LayerId . TOP_ASSEMBLY \| EPCB_LayerId . BOTTOM_SILKSCREEN \| EPCB_LayerId . BOTTOM_SOLDER_MASK \| EPCB_LayerId . BOTTOM_PASTE_MASK \| EPCB_LayerId . BOTTOM_ASSEMBLY \| EPCB_LayerId . DOCUMENT \| EPCB_LayerId . MECHANICAL \| EPCB_LayerId . MULTI ; | 填充所属层 |
| TPCB_LayersOfImage | export type TPCB_LayersOfImage = \| TPCB_LayersOfCopper \| TPCB_LayersOfCustom \| EPCB_LayerId . TOP_SILKSCREEN \| EPCB_LayerId . TOP_SOLDER_MASK \| EPCB_LayerId . TOP_ASSEMBLY \| EPCB_LayerId . BOTTOM_SILKSCREEN \| EPCB_LayerId . BOTTOM_SOLDER_MASK \| EPCB_LayerId . BOTTOM_ASSEMBLY \| EPCB_LayerId . DOCUMENT \| EPCB_LayerId . MECHANICAL \| EPCB_LayerId . DRILL_DRAWING ; | 复杂多边形图（SVG 图像、文本）所属层 |
| TPCB_LayersOfInner | export type TPCB_LayersOfInner = \| EPCB_LayerId . INNER_1 \| EPCB_LayerId . INNER_2 \| EPCB_LayerId . INNER_3 \| EPCB_LayerId . INNER_4 \| EPCB_LayerId . INNER_5 \| EPCB_LayerId . INNER_6 \| EPCB_LayerId . INNER_7 \| EPCB_LayerId . INNER_8 \| EPCB_LayerId . INNER_9 \| EPCB_LayerId . INNER_10 \| EPCB_LayerId . INNER_11 \| EPCB_LayerId . INNER_12 \| EPCB_LayerId . INNER_13 \| EPCB_LayerId . INNER_14 \| EPCB_LayerId . INNER_15 \| EPCB_LayerId . INNER_16 \| EPCB_LayerId . INNER_17 \| EPCB_LayerId . INNER_18 \| EPCB_LayerId . INNER_19 \| EPCB_LayerId . INNER_20 \| EPCB_LayerId . INNER_21 \| EPCB_LayerId . INNER_22 \| EPCB_LayerId . INNER_23 \| EPCB_LayerId . INNER_24 \| EPCB_LayerId . INNER_25 \| EPCB_LayerId . INNER_26 \| EPCB_LayerId . INNER_27 \| EPCB_LayerId . INNER_28 \| EPCB_LayerId . INNER_29 \| EPCB_LayerId . INNER_30 \| EPCB_LayerId . INNER_31 \| EPCB_LayerId . INNER_32 ; | 内层 |
| TPCB_LayersOfLine | export type TPCB_LayersOfLine = \| TPCB_LayersOfCopper \| TPCB_LayersOfCustom \| EPCB_LayerId . TOP_SILKSCREEN \| EPCB_LayerId . TOP_SOLDER_MASK \| EPCB_LayerId . TOP_PASTE_MASK \| EPCB_LayerId . TOP_ASSEMBLY \| EPCB_LayerId . BOTTOM_SILKSCREEN \| EPCB_LayerId . BOTTOM_SOLDER_MASK \| EPCB_LayerId . BOTTOM_PASTE_MASK \| EPCB_LayerId . BOTTOM_ASSEMBLY \| EPCB_LayerId . BOARD_OUTLINE \| EPCB_LayerId . DOCUMENT \| EPCB_LayerId . MECHANICAL \| EPCB_LayerId . DRILL_DRAWING ; | 线所属层 |
| TPCB_LayersOfObject | export type TPCB_LayersOfObject = EPCB_LayerId . TOP_SILKSCREEN \| EPCB_LayerId . BOTTOM_SILKSCREEN \| EPCB_LayerId . DOCUMENT ; | 二进制内嵌对象所属层 |
| TPCB_LayersOfPad | export type TPCB_LayersOfPad = EPCB_LayerId . TOP \| EPCB_LayerId . BOTTOM \| EPCB_LayerId . MULTI ; | 焊盘所属层 |
| TPCB_LayersOfRegion | export type TPCB_LayersOfRegion = TPCB_LayersOfCopper \| EPCB_LayerId . MULTI ; | 区域所属层 |
| TPCB_PolygonSourceArray | export type TPCB_PolygonSourceArray = Array < 'L' \| 'ARC' \| 'CARC' \| 'C' \| 'R' \| 'CIRCLE' \| number >; | 单多边形源数组 |
| TPCB_PrimitiveDimensionCoordinateSet | export type TPCB_PrimitiveDimensionCoordinateSet = \| [ number , number , number , number , number , number ] \| [ number , number , number , number , number , number , number , number ]; | 尺寸标注坐标集 |
| TPCB_PrimitivePadHole | export type TPCB_PrimitivePadHole = [ EPCB_PrimitivePadHoleType , number , number ]; | 焊盘钻孔 |
| TPCB_PrimitivePadShape | export type TPCB_PrimitivePadShape = \| [ EPCB_PrimitivePadShapeType . ELLIPSE \| EPCB_PrimitivePadShapeType . OBLONG \| EPCB_PrimitivePadShapeType . REGULAR_POLYGON , number , number ] \| [ EPCB_PrimitivePadShapeType . RECTANGLE , number , number , number ] \| [ EPCB_PrimitivePadShapeType . POLYLINE_COMPLEX_POLYGON , TPCB_PolygonSourceArray \| Array < TPCB_PolygonSourceArray >]; | 焊盘外形 |
| TPCB_PrimitiveSpecialPadShape | export type TPCB_PrimitiveSpecialPadShape = Array <[ number , number , TPCB_PrimitivePadShape ]>; | 特殊焊盘外形 |

### 变量

- 无

## 面板

- 类：1（方法 1）；枚举：0；接口：0（成员 0）；图元类：0（方法 0）；类型别名：0；变量：0

### 类

#### PNL_Document

- 类签名：export declare class PNL_Document
- 类描述：面板 / 文档操作类
- 类备注：

##### save

- 方法签名：save (): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

- 无

- 返回值类型：Promise<boolean>
- 返回值描述：保存操作是否成功，保存失败、上传失败等错误均返回 false

### 枚举

- 无

### 接口

- 无

### 图元类

- 无

### 类型别名

- 无

### 变量

- 无

## 综合库

- 类：8（方法 58）；枚举：3；接口：27（成员 161）；图元类：0（方法 0）；类型别名：0；变量：0

### 类

#### LIB_3DModel

- 类签名：export declare class LIB_3DModel
- 类描述：综合库 / 3D 模型类
- 类备注：

##### copy

- 方法签名：copy (modelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification ?: ILIB_ClassificationIndex, newModelName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| modelUuid | string | 3D 模型 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| targetLibraryUuid | string | 目标库 UUID |
| targetClassification | ILIB_ClassificationIndex | (Optional) 目标库内的分类 |
| newModelName | string | (Optional) 新 3D 模型名称，如若目标库内存在重名 3D 模型将导致复制失败 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：目标库内新 3D 模型的 UUID

##### create

- 方法签名：create (libraryUuid: string, modelFile: Blob, classification ?: ILIB_ClassificationIndex, unit ?: ESYS_Unit. MILLIMETER | ESYS_Unit. CENTIMETER | ESYS_Unit. METER | ESYS_Unit. MIL | ESYS_Unit. INCH ): Promise < string[] | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| modelFile | Blob | 3D 模型文件数据 |
| classification | ILIB_ClassificationIndex | (Optional) 分类 |
| unit | ESYS_Unit.MILLIMETER \| ESYS_Unit.CENTIMETER \| ESYS_Unit.METER \| ESYS_Unit.MIL \| ESYS_Unit.INCH | (Optional) |

- 返回值类型：Promise<string[] | undefined>
- 返回值描述：3D 模型 UUID

##### delete

- 方法签名：delete ( modelUuid : string , libraryUuid : string ) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| modelUuid | string | 3D 模型 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get

- 方法签名：get (modelUuid: string, libraryUuid ?: string): Promise < ILIB_3DModelItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| modelUuid | string | 3D 模型 UUID |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise< ILIB_3DModelItem | undefined>
- 返回值描述：3D 模型属性

##### modify

- 方法签名：modify (modelUuid: string, libraryUuid: string, modelName ?: string, classification ?: ILIB_ClassificationIndex | null , description ?: string | null ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| modelUuid | string | 3D 模型 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| modelName | string | (Optional) 3D 模型名称 |
| classification | ILIB_ClassificationIndex \| null | (Optional) 分类 |
| description | string \| null | (Optional) 描述 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### search

- 方法签名：search (key: string, libraryUuid ?: string, classification ?: ILIB_ClassificationIndex, itemsOfPage ?: number, page ?: number): Promise < Array < ILIB_3DModelSearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 搜索关键字 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| classification | ILIB_ClassificationIndex | (Optional) 分类，默认为全部 |
| itemsOfPage | number | (Optional) 一页搜索结果的数量 |
| page | number | (Optional) 页数 |

- 返回值类型：Promise<Array< ILIB_3DModelSearchItem >>
- 返回值描述：搜索到的 3D 模型属性列表

#### LIB_Cbb

- 类签名：export declare class LIB_Cbb
- 类描述：综合库 / 复用模块类
- 类备注：

##### copy

- 方法签名：copy (cbbUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification ?: ILIB_ClassificationIndex, newCbbName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| targetLibraryUuid | string | 目标库 UUID |
| targetClassification | ILIB_ClassificationIndex | (Optional) 目标库内的分类 |
| newCbbName | string | (Optional) 新复用模块名称，如若目标库内存在重名复用模块将导致复制失败 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：目标库内新复用模块的 UUID

##### create

- 方法签名：create (libraryUuid: string, cbbName: string, classification ?: ILIB_ClassificationIndex, description ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| cbbName | string | 复用模块名称 |
| classification | ILIB_ClassificationIndex | (Optional) 分类 |
| description | string | (Optional) 描述 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：复用模块 UUID

##### delete

- 方法签名：delete ( cbbUuid : string , libraryUuid : string ) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get

- 方法签名：get (cbbUuid: string, libraryUuid ?: string): Promise < ILIB_CbbItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise< ILIB_CbbItem | undefined>
- 返回值描述：复用模块属性

##### modify

- 方法签名：modify (cbbUuid: string, libraryUuid: string, cbbName ?: string, classification ?: ILIB_ClassificationIndex | null , description ?: string | null ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| cbbName | string | (Optional) 复用模块名称 |
| classification | ILIB_ClassificationIndex \| null | (Optional) 分类 |
| description | string \| null | (Optional) 描述 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### openProjectInEditor

- 方法签名：openProjectInEditor (cbbUuid: string, libraryUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：

##### openSymbolInEditor

- 方法签名：openSymbolInEditor (cbbUuid: string, libraryUuid: string, splitScreenId ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| cbbUuid | string | 复用模块 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| splitScreenId | string | (Optional) 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 DMT_EditorControl 内的接口获取 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：标签页 ID，对应 IDMT_EditorTabItem.tabId ，可使用 DMT_EditorControl.getSplitScreenIdByTabId() 获取到分屏 ID

##### search

- 方法签名：search (key: string, libraryUuid ?: string, classification ?: ILIB_ClassificationIndex, itemsOfPage ?: number, page ?: number): Promise < Array < ILIB_CbbSearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 搜索关键字 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| classification | ILIB_ClassificationIndex | (Optional) 分类，默认为全部 |
| itemsOfPage | number | (Optional) 一页搜索结果的数量 |
| page | number | (Optional) 页数 |

- 返回值类型：Promise<Array< ILIB_CbbSearchItem >>
- 返回值描述：搜索到的复用模块属性列表

#### LIB_Classification

- 类签名：export declare class LIB_Classification
- 类描述：综合库 / 库分类索引类
- 类备注：

##### createPrimary

- 方法签名：createPrimary (libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise < ILIB_ClassificationIndex | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID |
| libraryType | ELIB_LibraryType | 库类型 |
| primaryClassificationName | string | 一级分类名称 |

- 返回值类型：Promise< ILIB_ClassificationIndex | undefined>
- 返回值描述：分类索引

##### createSecondary

- 方法签名：createSecondary (libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationName: string): Promise < ILIB_ClassificationIndex | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID |
| libraryType | ELIB_LibraryType | 库类型 |
| primaryClassificationUuid | string | 一级分类 UUID |
| secondaryClassificationName | string | 二级分类名称 |

- 返回值类型：Promise< ILIB_ClassificationIndex | undefined>
- 返回值描述：分类索引

##### deleteByIndex

- 方法签名：deleteByIndex (classificationIndex: ILIB_ClassificationIndex): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| classificationIndex | ILIB_ClassificationIndex | 分类索引 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### deleteByUuid

- 方法签名：deleteByUuid (libraryUuid: string, classificationUuid: string): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID |
| classificationUuid | string |  |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### getAllClassificationTree

- 方法签名：getAllClassificationTree (libraryUuid: string, libraryType: ELIB_LibraryType): Promise < Array <{ name : string ; uuid : string ; children ?: Array <{ name : string ; uuid : string ; }> | undefined ; }> > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID |
| libraryType | ELIB_LibraryType | 库类型 |

- 返回值类型：Promise<Array<{ name: string; uuid: string; children?: Array<{ name: string; uuid: string; }> | undefined; }>>
- 返回值描述：分类信息组成的树结构数据

##### getIndexByName

- 方法签名：getIndexByName (libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string, secondaryClassificationName ?: string): Promise < ILIB_ClassificationIndex | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID |
| libraryType | ELIB_LibraryType | 库类型 |
| primaryClassificationName | string | 一级分类名称 |
| secondaryClassificationName | string | (Optional) 二级分类名称 |

- 返回值类型：Promise< ILIB_ClassificationIndex | undefined>
- 返回值描述：分类索引

##### getNameByIndex

- 方法签名：getNameByIndex (classificationIndex: ILIB_ClassificationIndex): Promise <{ primaryClassificationName : string ; secondaryClassificationName ?: string | undefined ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| classificationIndex | ILIB_ClassificationIndex | 分类索引 |

- 返回值类型：Promise<{ primaryClassificationName: string; secondaryClassificationName?: string | undefined; } | undefined>
- 返回值描述：两级分类的名称

##### getNameByUuid

- 方法签名：getNameByUuid (libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid ?: string): Promise <{ primaryClassificationName : string ; secondaryClassificationName ?: string | undefined ; } | undefined >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID |
| libraryType | ELIB_LibraryType | 库类型 |
| primaryClassificationUuid | string | 一级分类 UUID |
| secondaryClassificationUuid | string | (Optional) 二级分类 UUID，如若不指定，则只获取一级分类的信息 |

- 返回值类型：Promise<{ primaryClassificationName: string; secondaryClassificationName?: string | undefined; } | undefined>
- 返回值描述：两级分类的名称

#### LIB_Device

- 类签名：export declare class LIB_Device
- 类描述：综合库 / 器件类
- 类备注：

##### copy

- 方法签名：copy (deviceUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification ?: ILIB_ClassificationIndex, newDeviceName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| deviceUuid | string | 器件 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| targetLibraryUuid | string | 目标库 UUID |
| targetClassification | ILIB_ClassificationIndex | (Optional) 目标库内的分类 |
| newDeviceName | string | (Optional) 新器件名称，如若目标库内存在重名器件将导致复制失败 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：目标库内新器件的 UUID

##### create

- 方法签名：create (libraryUuid: string, deviceName: string, classification ?: ILIB_ClassificationIndex, association ?: { symbolType?: ELIB_SymbolType; symbolUuid ?: string; symbol ?: { uuid: string; libraryUuid: string; }; footprintUuid ?: string; footprint ?: { uuid: string; libraryUuid: string; }; model3D ?: { uuid: string; libraryUuid: string; }; imageData ?: File | Blob; }, description ?: string, property ?: ILIB_DeviceExtendPropertyItem): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| deviceName | string | 器件名称 |
| classification | ILIB_ClassificationIndex | (Optional) 分类 |
| association | { symbolType?: ELIB_SymbolType ; symbolUuid?: string; symbol?: { uuid: string; libraryUuid: string; }; footprintUuid?: string; footprint?: { uuid: string; libraryUuid: string; }; model3D?: { uuid: string; libraryUuid: string; }; imageData?: File \| Blob; } | (Optional) 关联符号、封装、图像，指定 symbolType 则创建新符号，无需新建符号则无需指定 symbolType ，但请注意，如若不新建符号也不指定符号的关联信息将无法创建器件 |
| description | string | (Optional) 描述 |
| property | ILIB_DeviceExtendPropertyItem | (Optional) 其它参数，仅 designator 、 addIntoBom 、 addIntoPcb 存在默认值 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：器件 UUID

##### delete

- 方法签名：delete ( deviceUuid : string , libraryUuid : string ) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| deviceUuid | string | 器件 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get

- 方法签名：get (deviceUuid: string, libraryUuid ?: string): Promise < ILIB_DeviceItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| deviceUuid | string | 器件 UUID |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise< ILIB_DeviceItem | undefined>
- 返回值描述：器件属性

##### getByLcscIds

- 方法签名：getByLcscIds< T extends boolean >( lcscIds : string , libraryUuid ?: string , allowMultiMatch ?: T ) : Promise < T extends true ? ILIB_DeviceSearchItem | undefined : Array < ILIB_DeviceSearchItem >>;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lcscIds | string | 立创 C 编号 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| allowMultiMatch | T | (Optional) 是否允许单个立创 C 编号匹配多个结果 |

- 返回值类型：Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array< ILIB_DeviceSearchItem >>
- 返回值描述：搜索到的器件属性

##### getByLcscIds

- 方法签名：getByLcscIds (lcscIds: Array < string > , libraryUuid ?: string, allowMultiMatch ?: boolean): Promise < Array < ILIB_DeviceSearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| lcscIds | Array<string> | 立创 C 编号数组 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| allowMultiMatch | boolean | (Optional) 是否允许单个立创 C 编号匹配多个结果 |

- 返回值类型：Promise<Array< ILIB_DeviceSearchItem >>
- 返回值描述：搜索到的器件属性的列表

##### modify

- 方法签名：modify (deviceUuid: string, libraryUuid: string, deviceName ?: string, classification ?: ILIB_ClassificationIndex | null , association ?: { symbolUuid?: string; symbol ?: { uuid: string; libraryUuid: string; }; footprintUuid ?: string | null ; footprint ?: { uuid: string; libraryUuid: string; } | null ; model3D ?: { uuid: string; libraryUuid: string; } | null ; imageData ?: File | Blob | null ; }, description ?: string | null , property ?: { name?: string | null ; designator ?: string; addIntoBom ?: boolean; addIntoPcb ?: boolean; net ?: string; manufacturer ?: string | null ; manufacturerId ?: string | null ; supplier ?: string | null ; supplierId ?: string | null ; otherProperty ?: { [key: string]: boolean | number | string | undefined | null ; }; }): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| deviceUuid | string | 器件 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| deviceName | string | (Optional) 器件名称 |
| classification | ILIB_ClassificationIndex \| null | (Optional) 分类 |
| association | { symbolUuid?: string; symbol?: { uuid: string; libraryUuid: string; }; footprintUuid?: string \| null; footprint?: { uuid: string; libraryUuid: string; } \| null; model3D?: { uuid: string; libraryUuid: string; } \| null; imageData?: File \| Blob \| null; } | (Optional) 关联符号、封装、图像 |
| description | string \| null | (Optional) 描述 |
| property | { name?: string \| null; designator?: string; addIntoBom?: boolean; addIntoPcb?: boolean; net?: string; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: { [key: string]: boolean \| number \| string \| undefined \| null; }; } | (Optional) 其它参数 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### search

- 方法签名：search (key: string, libraryUuid ?: string, classification ?: ILIB_ClassificationIndex, symbolType ?: ELIB_SymbolType, itemsOfPage ?: number, page ?: number): Promise < Array < ILIB_DeviceSearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 搜索关键字 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| classification | ILIB_ClassificationIndex | (Optional) 分类，默认为全部 |
| symbolType | ELIB_SymbolType | (Optional) 符号类型，默认为全部 |
| itemsOfPage | number | (Optional) 一页搜索结果的数量 |
| page | number | (Optional) 页数 |

- 返回值类型：Promise<Array< ILIB_DeviceSearchItem >>
- 返回值描述：搜索到的器件属性的列表

#### LIB_Footprint

- 类签名：export declare class LIB_Footprint
- 类描述：综合库 / 封装类
- 类备注：

##### copy

- 方法签名：copy (footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification ?: ILIB_ClassificationIndex, newFootprintName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string | 封装 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| targetLibraryUuid | string | 目标库 UUID |
| targetClassification | ILIB_ClassificationIndex | (Optional) 目标库内的分类 |
| newFootprintName | string | (Optional) 新封装名称，如若目标库内存在重名封装将导致复制失败 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：目标库内新封装的 UUID

##### create

- 方法签名：create (libraryUuid: string, footprintName: string, classification ?: ILIB_ClassificationIndex, description ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| footprintName | string | 封装名称 |
| classification | ILIB_ClassificationIndex | (Optional) 分类 |
| description | string | (Optional) 描述 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：封装 UUID

##### delete

- 方法签名：delete ( footprintUuid : string , libraryUuid : string ) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string | 封装 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get

- 方法签名：get (footprintUuid: string, libraryUuid ?: string): Promise < ILIB_FootprintItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string | 封装 UUID |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise< ILIB_FootprintItem | undefined>
- 返回值描述：封装属性

##### modify

- 方法签名：modify (footprintUuid: string, libraryUuid: string, footprintName ?: string, classification ?: ILIB_ClassificationIndex | null , description ?: string | null ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string | 封装 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| footprintName | string | (Optional) 封装名称 |
| classification | ILIB_ClassificationIndex \| null | (Optional) 分类 |
| description | string \| null | (Optional) 描述 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### openInEditor

- 方法签名：openInEditor (footprintUuid: string, libraryUuid: string, splitScreenId ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string | 封装 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| splitScreenId | string | (Optional) 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 DMT_EditorControl 内的接口获取 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：标签页 ID，对应 IDMT_EditorTabItem.tabId ，可使用 DMT_EditorControl.getSplitScreenIdByTabId() 获取到分屏 ID

##### search

- 方法签名：search (key: string, libraryUuid ?: string, classification ?: ILIB_ClassificationIndex, itemsOfPage ?: number, page ?: number): Promise < Array < ILIB_FootprintSearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 搜索关键字 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| classification | ILIB_ClassificationIndex | (Optional) 分类，默认为全部 |
| itemsOfPage | number | (Optional) 一页搜索结果的数量 |
| page | number | (Optional) 页数 |

- 返回值类型：Promise<Array< ILIB_FootprintSearchItem >>
- 返回值描述：搜索到的封装属性列表

##### updateDocumentSource

- 方法签名：updateDocumentSource (footprintUuid: string, libraryUuid: string, documentSource: string): Promise < boolean | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| footprintUuid | string | 封装 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| documentSource | string | 文档源码 |

- 返回值类型：Promise<boolean | undefined>
- 返回值描述：是否更新成功

#### LIB_LibrariesList

- 类签名：export declare class LIB_LibrariesList
- 类描述：综合库 / 库列表类
- 类备注：

##### getAllLibrariesList

- 方法签名：getAllLibrariesList (): Promise < Array < ILIB_LibraryInfo >> ;
- 方法修饰符：
- 方法描述：获取所有库的列表

参数：

- 无

- 返回值类型：Promise<Array< ILIB_LibraryInfo >>
- 返回值描述：库信息列表

##### getFavoriteLibraryUuid

- 方法签名：getFavoriteLibraryUuid (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：获取收藏库的 UUID

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：收藏库的 UUID

##### getPersonalLibraryUuid

- 方法签名：getPersonalLibraryUuid (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：获取个人库的 UUID

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：个人库的 UUID

##### getProjectLibraryUuid

- 方法签名：getProjectLibraryUuid (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：获取工程库的 UUID

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：工程库的 UUID

##### getSystemLibraryUuid

- 方法签名：getSystemLibraryUuid (): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：获取系统库的 UUID

参数：

- 无

- 返回值类型：Promise<string | undefined>
- 返回值描述：系统库的 UUID

#### LIB_PanelLibrary

- 类签名：export declare class LIB_PanelLibrary
- 类描述：综合库 / 面板库类
- 类备注：

##### copy

- 方法签名：copy (panelLibraryUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification ?: ILIB_ClassificationIndex, newPanelLibraryName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelLibraryUuid | string | 面板库 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| targetLibraryUuid | string | 目标库 UUID |
| targetClassification | ILIB_ClassificationIndex | (Optional) 目标库内的分类 |
| newPanelLibraryName | string | (Optional) 新面板库名称，如若目标库内存在重名面板库将导致复制失败 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：目标库内新面板库的 UUID

##### create

- 方法签名：create (libraryUuid: string, panelLibraryName: string, classification ?: ILIB_ClassificationIndex, description ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| panelLibraryName | string | 面板库名称 |
| classification | ILIB_ClassificationIndex | (Optional) 分类 |
| description | string | (Optional) 描述 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：面板库 UUID

##### delete

- 方法签名：delete ( panelLibraryUuid : string , libraryUuid : string ) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelLibraryUuid | string | 面板库 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get

- 方法签名：get (panelLibraryUuid: string, libraryUuid ?: string): Promise < ILIB_PanelLibraryItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelLibraryUuid | string | 面板库 UUID |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise< ILIB_PanelLibraryItem | undefined>
- 返回值描述：面板库属性

##### modify

- 方法签名：modify (panelLibraryUuid: string, libraryUuid: string, panelLibraryName ?: string, classification ?: ILIB_ClassificationIndex | null , description ?: string | null ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelLibraryUuid | string | 面板库 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| panelLibraryName | string | (Optional) 面板库名称 |
| classification | ILIB_ClassificationIndex \| null | (Optional) 分类 |
| description | string \| null | (Optional) 描述 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### openInEditor

- 方法签名：openInEditor (panelLibraryUuid: string, libraryUuid: string, splitScreenId ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| panelLibraryUuid | string | 面板库 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| splitScreenId | string | (Optional) 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 DMT_EditorControl 内的接口获取 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：标签页 ID，对应 IDMT_EditorTabItem.tabId ，可使用 DMT_EditorControl.getSplitScreenIdByTabId() 获取到分屏 ID

##### search

- 方法签名：search (key: string, libraryUuid ?: string, classification ?: ILIB_ClassificationIndex, itemsOfPage ?: number, page ?: number): Promise < Array < ILIB_PanelLibrarySearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 搜索关键字 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| classification | ILIB_ClassificationIndex | (Optional) 分类，默认为全部 |
| itemsOfPage | number | (Optional) 一页搜索结果的数量 |
| page | number | (Optional) 页数 |

- 返回值类型：Promise<Array< ILIB_PanelLibrarySearchItem >>
- 返回值描述：搜索到的面板库属性列表

#### LIB_Symbol

- 类签名：export declare class LIB_Symbol
- 类描述：综合库 / 符号类
- 类备注：

##### copy

- 方法签名：copy (symbolUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification ?: ILIB_ClassificationIndex, newSymbolName ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| symbolUuid | string | 符号 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| targetLibraryUuid | string | 目标库 UUID |
| targetClassification | ILIB_ClassificationIndex | (Optional) 目标库内的分类 |
| newSymbolName | string | (Optional) 新符号名称，如若目标库内存在重名符号将导致复制失败 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：目标库内新符号的 UUID

##### create

- 方法签名：create (libraryUuid: string, symbolName: string, classification ?: ILIB_ClassificationIndex, symbolType ?: ELIB_SymbolType, description ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| symbolName | string | 符号名称 |
| classification | ILIB_ClassificationIndex | (Optional) 分类 |
| symbolType | ELIB_SymbolType | (Optional) 符号类型 |
| description | string | (Optional) 描述 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：符号 UUID

##### delete

- 方法签名：delete ( symbolUuid : string , libraryUuid : string ) : Promise < boolean >;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| symbolUuid | string | 符号 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### get

- 方法签名：get (symbolUuid: string, libraryUuid ?: string): Promise < ILIB_SymbolItem | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| symbolUuid | string | 符号 UUID |
| libraryUuid | string | (Optional) 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |

- 返回值类型：Promise< ILIB_SymbolItem | undefined>
- 返回值描述：符号属性

##### modify

- 方法签名：modify (symbolUuid: string, libraryUuid: string, symbolName ?: string, classification ?: ILIB_ClassificationIndex | null , description ?: string | null ): Promise < boolean > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| symbolUuid | string | 符号 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| symbolName | string | (Optional) 符号名称 |
| classification | ILIB_ClassificationIndex \| null | (Optional) 分类 |
| description | string \| null | (Optional) 描述 |

- 返回值类型：Promise<boolean>
- 返回值描述：操作是否成功

##### openInEditor

- 方法签名：openInEditor (symbolUuid: string, libraryUuid: string, splitScreenId ?: string): Promise < string | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| symbolUuid | string | 符号 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| splitScreenId | string | (Optional) 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 DMT_EditorControl 内的接口获取 |

- 返回值类型：Promise<string | undefined>
- 返回值描述：标签页 ID，对应 IDMT_EditorTabItem.tabId ，可使用 DMT_EditorControl.getSplitScreenIdByTabId() 获取到分屏 ID

##### search

- 方法签名：search (key: string, libraryUuid ?: string, classification ?: ILIB_ClassificationIndex, symbolType ?: ELIB_SymbolType, itemsOfPage ?: number, page ?: number): Promise < Array < ILIB_SymbolSearchItem >> ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| key | string | 搜索关键字 |
| libraryUuid | string | (Optional) 库 UUID，默认为系统库，可以使用 LIB_LibrariesList 内的接口获取 |
| classification | ILIB_ClassificationIndex | (Optional) 分类，默认为全部 |
| symbolType | ELIB_SymbolType | (Optional) 符号类型，默认为全部 |
| itemsOfPage | number | (Optional) 一页搜索结果的数量 |
| page | number | (Optional) 页数 |

- 返回值类型：Promise<Array< ILIB_SymbolSearchItem >>
- 返回值描述：搜索到的符号属性列表

##### updateDocumentSource

- 方法签名：updateDocumentSource (symbolUuid: string, libraryUuid: string, documentSource: string): Promise < boolean | undefined > ;
- 方法修饰符：
- 方法描述：此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

参数：

| 参数名 | 参数类型 | 参数描述 |
|---|---|---|
| symbolUuid | string | 符号 UUID |
| libraryUuid | string | 库 UUID，可以使用 LIB_LibrariesList 内的接口获取 |
| documentSource | string | 文档源码 |

- 返回值类型：Promise<boolean | undefined>
- 返回值描述：是否更新成功

### 枚举

#### ELIB_DeviceJlcLibraryCategory

- 枚举签名：export declare enum ELIB_DeviceJlcLibraryCategory
- 枚举描述：嘉立创贴片库类别
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| EXTEND | "extend" | 扩展库 |
| STANDARD | "standard" | 基础库 |

#### ELIB_LibraryType

- 枚举签名：export declare enum ELIB_LibraryType
- 枚举描述：综合库库类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| CBB | "1" | 复用模块 |
| DEVICE | "3" | 器件 |
| FOOTPRINT | "4" | 封装 |
| MODEL | "5" | 3D 模型 |
| PANEL_LIBRARY | "29" | 面板库 |
| SYMBOL | "2" | 符号 |

#### ELIB_SymbolType

- 枚举签名：export declare enum ELIB_SymbolType
- 枚举描述：符号类型
- 枚举备注：

| 成员名 | 成员值 | 成员描述 |
|---|---|---|
| CBB_SYMBOL | "\u5F00\u53D1\u8BF7\u4FEE\u65393" | 复用模块符号 |
| COMPONENT | 2 | 元件符号 |
| DIFFERENTIAL_PAIRS_FLAG | "\u5F00\u53D1\u8BF7\u4FEE\u65392" | 差分对标识 |
| DRAWING | 20 | 图纸 |
| NET_FLAG | 18 | 网络标识 |
| NET_PORT | 19 | 网络端口 |
| NON_ELECTRICAL | 21 | 无电气 |
| OFF_PAGE_CONNECTOR | "\u5F00\u53D1\u8BF7\u4FEE\u65391" | 跨页连接标识 |
| SHORT_CIRCUIT_FLAG | 22 | 短接标识 |

### 接口

#### ILIB_3DModelItem

- 接口签名：export interface ILIB_3DModelItem
- 接口描述：3D 模型属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| libraryType | readonly | ELIB_LibraryType. MODEL | 库类型 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 3D 模型名称 |
| uuid |  | string | 3D 模型 UUID |

接口方法：

- 无

#### ILIB_3DModelSearchItem

- 接口签名：export interface ILIB_3DModelSearchItem
- 接口描述：搜索到的 3D 模型属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| ascription |  | string | 归属 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| lastModifiedBy |  | string | 前次修改者 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 3D 模型名称 |
| ordinal |  | number | 排序 |
| updateTimestamp |  | number | 更新时间戳 |
| uuid |  | string | 3D 模型 UUID |

接口方法：

- 无

#### ILIB_CbbItem

- 接口签名：export interface ILIB_CbbItem
- 接口描述：复用模块属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| boards |  | Array < IDMT_BoardItem > | 下属板子 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| libraryType | readonly | ELIB_LibraryType. CBB | 库类型 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 复用模块名称 |
| uuid |  | string | 复用模块 UUID |

接口方法：

- 无

#### ILIB_CbbSearchItem

- 接口签名：export interface ILIB_CbbSearchItem
- 接口描述：搜索到的复用模块属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| ascription |  | string | 归属 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| lastModifiedBy |  | string | 前次修改者 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 复用模块名称 |
| ordinal |  | number | 排序 |
| updateTimestamp |  | number | 更新时间戳 |
| uuid |  | string | 复用模块 UUID |

接口方法：

- 无

#### ILIB_ClassificationIndex

- 接口签名：export interface ILIB_ClassificationIndex
- 接口描述：分类索引
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| libraryType |  | ELIB_LibraryType | 库类型 |
| libraryUuid |  | string | 库 UUID |
| primaryClassificationUuid |  | string | 一级分类 UUID |
| secondaryClassificationUuid |  | string | 二级分类 UUID |

接口方法：

- 无

#### ILIB_DeviceAssociationItem

- 接口签名：export interface ILIB_DeviceAssociationItem
- 接口描述：器件关联符号、封装属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| footprint |  | { uuid: string | 封装 |
| footprintUuid |  | string | Warning: This API is now obsolete. 请使用 footprint 替代 |
| images |  | Array < string > | (Optional) |
| symbol |  | { type : ELIB_SymbolType | 符号 |
| symbolType |  | ELIB_SymbolType | Warning: This API is now obsolete. 请使用 symbol 替代 |
| symbolUuid |  | string | Warning: This API is now obsolete. 请使用 symbol 替代 |

接口方法：

- 无

#### ILIB_DeviceExtendPropertyItem

- 接口签名：export interface ILIB_DeviceExtendPropertyItem
- 接口描述：器件扩展属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| addIntoBom |  | boolean | 加入 BOM |
| addIntoPcb |  | boolean | 转到 PCB |
| designator |  | string | 位号 |
| manufacturer |  | string | 制造商 |
| manufacturerId |  | string | 制造商编号 |
| name |  | string | 名称 |
| net |  | string | 网络 |
| otherProperty |  | { [key: string]: boolean \| number \| string \| undefined | 其它参数 |
| supplier |  | string | 供应商 |
| supplierId |  | string | 供应商编号 |

接口方法：

- 无

#### ILIB_DeviceItem

- 接口签名：export interface ILIB_DeviceItem
- 接口描述：器件属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| association |  | ILIB_DeviceAssociationItem | 关联 |
| classification |  | ILIB_ClassificationIndex | 器件分类 |
| description |  | string | 描述 |
| libraryType | readonly | ELIB_LibraryType. DEVICE | 库类型 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 器件名称 |
| property |  | ILIB_DeviceExtendPropertyItem | 扩展属性 |
| uuid |  | string | 器件 UUID |

接口方法：

- 无

#### ILIB_DeviceSearchItem

- 接口签名：export interface ILIB_DeviceSearchItem
- 接口描述：搜索到的器件属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| classification |  | ILIB_ClassificationIndex | 器件分类 |
| description |  | string | 描述 |
| footprint |  | { name: string | 关联封装 |
| footprintName |  | string | Warning: This API is now obsolete. 请使用 footprint 替代 |
| footprintUuid |  | string | Warning: This API is now obsolete. 请使用 footprint 替代 |
| imageUuid |  | string | 关联图片 UUID |
| jlcInventory |  | number | 嘉立创库存 |
| jlcLibraryCategory |  | ELIB_DeviceJlcLibraryCategory | 嘉立创库类别 |
| jlcPrice |  | number | 嘉立创价格 |
| lcscInventory |  | number | 立创商城库存 |
| lcscPrice |  | number | 立创商城价格 |
| libraryUuid |  | string | 所属库 UUID |
| manufacturer |  | string | 制造商 |
| manufacturerId |  | string | 制造商编号 |
| model3D |  | { name: string | 关联 3D 模型 |
| model3DName |  | string | Warning: This API is now obsolete. 请使用 model3D 替代 |
| model3DUuid |  | string | Warning: This API is now obsolete. 请使用 model3D 替代 |
| name |  | string | 器件名称 |
| ordinal |  | number | 排序 |
| supplier |  | string | 供应商 |
| supplierId |  | string | 供应商编号 |
| symbol |  | { name : string | 关联符号 |
| symbolName |  | string | Warning: This API is now obsolete. 请使用 symbol 替代 |
| symbolUuid |  | string | Warning: This API is now obsolete. 请使用 symbol 替代 |
| uuid |  | string | 器件 UUID |

接口方法：

- 无

#### ILIB_ExtendLibraryCbbFunctions

- 接口签名：export interface ILIB_ExtendLibraryCbbFunctions extends ILIB_ExtendLibraryFunctions
- 接口描述：外部库复用模块方法
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| getList |  | ( props : any ) => Promise < any > |  |

接口方法：

- 无

#### ILIB_ExtendLibraryClassificationIndex

- 接口签名：export interface ILIB_ExtendLibraryClassificationIndex
- 接口描述：外部库分类索引
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| primaryClassificationName |  | string | 一级分类名称 |
| primaryClassificationUuid |  | string | 一级分类 UUID |
| secondaryClassificationName |  | string | 二级分类名称 |
| secondaryClassificationUuid |  | string | 二级分类 UUID |

接口方法：

- 无

#### ILIB_ExtendLibraryDeviceFunctions

- 接口签名：export interface ILIB_ExtendLibraryDeviceFunctions extends ILIB_ExtendLibraryFunctions
- 接口描述：外部库器件方法
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| getList |  | ( props: ILIB_ExtendLibrarySearchProperty <{ attributes ?: { [ key : string ] : string |  |
| getSupportedSymbolTypes |  | () => Promise < Array < ELIB_SymbolType >> | 获取支持的符号类型 |

接口方法：

- 无

#### ILIB_ExtendLibraryFootprintFunctions

- 接口签名：export interface ILIB_ExtendLibraryFootprintFunctions extends ILIB_ExtendLibraryFunctions
- 接口描述：外部库封装方法
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| getList |  | ( props : ILIB_ExtendLibrarySearchProperty <{}>) => Promise < ILIB_ExtendLibrarySearchResult < ILIB_ExtendLibraryItem & { classification ?: ILIB_ExtendLibraryClassificationIndex |  |

接口方法：

- 无

#### ILIB_ExtendLibraryFunctions

- 接口签名：export interface ILIB_ExtendLibraryFunctions
- 接口描述：外部库方法
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| getClassificationTree |  | () => Promise < Array <{ name : string | 获取分类树 |
| getDetail |  | ( uuid : string ) => Promise < any > | 获取详细信息 |
| getList |  | ( props : ILIB_ExtendLibrarySearchProperty < any >) => Promise < ILIB_ExtendLibrarySearchResult < any >> | 获取列表 |

接口方法：

- 无

#### ILIB_ExtendLibraryItem

- 接口签名：export interface ILIB_ExtendLibraryItem extends ILIB_ExtendLibraryItemIndex
- 接口描述：外部库元素
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| data |  | string \| Blob | 库文件数据 |
| url |  | string | 库文件地址 |

接口方法：

- 无

#### ILIB_ExtendLibraryItemIndex

- 接口签名：export interface ILIB_ExtendLibraryItemIndex
- 接口描述：外部库元素索引
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| name |  | string | 库名称 |
| uuid |  | string | 库 UUID |

接口方法：

- 无

#### ILIB_ExtendLibrarySearchProperty

- 接口签名：export interface ILIB_ExtendLibrarySearchProperty < T >
- 接口描述：外部库搜索参数
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| page |  | number | 页数 |
| pageSize |  | number | 单页条目数 |
| query |  | T & { wd ?: string | 查询参数 |

接口方法：

- 无

#### ILIB_ExtendLibrarySearchResult

- 接口签名：export interface ILIB_ExtendLibrarySearchResult < T >
- 接口描述：外部库搜索结果
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| count |  | number | 总条目数 |
| lists |  | Array < T > | 结果列表 |
| page |  | number | 当前页数 |
| pageSize |  | number | 单页条目数 |
| totalPage |  | number | 总页数 |

接口方法：

- 无

#### ILIB_ExtendLibrarySymbolFunctions

- 接口签名：export interface ILIB_ExtendLibrarySymbolFunctions extends ILIB_ExtendLibraryFunctions
- 接口描述：外部库符号方法
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| getList |  | ( props: ILIB_ExtendLibrarySearchProperty <{ symbolType ?: ELIB_SymbolType |  |
| getSupportedSymbolTypes |  | () => Promise < Array < ELIB_SymbolType >> | 获取支持的符号类型 |

接口方法：

- 无

#### ILIB_ExtendLibraryUserIndex

- 接口签名：export interface ILIB_ExtendLibraryUserIndex
- 接口描述：外部库用户索引
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| name |  | string | 用户名称 |
| uuid |  | string | 嘉立创 EDA 系统内的用户 UUID |

接口方法：

- 无

#### ILIB_FootprintItem

- 接口签名：export interface ILIB_FootprintItem
- 接口描述：封装属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| libraryType | readonly | ELIB_LibraryType. FOOTPRINT | 库类型 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 封装名称 |
| uuid |  | string | 封装 UUID |

接口方法：

- 无

#### ILIB_FootprintSearchItem

- 接口签名：export interface ILIB_FootprintSearchItem
- 接口描述：搜索到的封装属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| ascription |  | string | 归属 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| lastModifiedBy |  | string | 前次修改者 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 封装名称 |
| ordinal |  | number | 排序 |
| updateTimestamp |  | number | 更新时间戳 |
| uuid |  | string | 封装 UUID |

接口方法：

- 无

#### ILIB_LibraryInfo

- 接口签名：export interface ILIB_LibraryInfo
- 接口描述：库信息
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| name |  | string | 库名称 |
| uuid |  | string | 库 UUID |

接口方法：

- 无

#### ILIB_PanelLibraryItem

- 接口签名：export interface ILIB_PanelLibraryItem
- 接口描述：面板库属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| libraryType | readonly | ELIB_LibraryType. PANEL_LIBRARY | 库类型 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 面板库名称 |
| uuid |  | string | 面板库 UUID |

接口方法：

- 无

#### ILIB_PanelLibrarySearchItem

- 接口签名：export interface ILIB_PanelLibrarySearchItem
- 接口描述：搜索到的面板库属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| ascription |  | string | 归属 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| lastModifiedBy |  | string | 前次修改者 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 面板库名称 |
| ordinal |  | number | 排序 |
| updateTimestamp |  | number | 更新时间戳 |
| uuid |  | string | 面板库 UUID |

接口方法：

- 无

#### ILIB_SymbolItem

- 接口签名：export interface ILIB_SymbolItem
- 接口描述：符号属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| cbbUuid |  | string | 所属复用模块 UUID，仅复用模块符号存在该属性 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| libraryType | readonly | ELIB_LibraryType. SYMBOL | 库类型 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 符号名称 |
| type |  | ELIB_SymbolType | 符号类型 |
| uuid |  | string | 符号 UUID |

接口方法：

- 无

#### ILIB_SymbolSearchItem

- 接口签名：export interface ILIB_SymbolSearchItem
- 接口描述：搜索到的符号属性
- 接口备注：

属性：

| 属性名 | 修饰符 | 属性类型 | 属性描述 |
|---|---|---|---|
| ascription |  | string | 归属 |
| classification |  | ILIB_ClassificationIndex | 分类 |
| description |  | string | 描述 |
| lastModifiedBy |  | string | 前次修改者 |
| libraryUuid |  | string | 所属库 UUID |
| name |  | string | 符号名称 |
| ordinal |  | number | 排序 |
| type |  | ELIB_SymbolType | 符号类型 |
| updateTimestamp |  | number | 更新时间戳 |
| uuid |  | string | 符号 UUID |

接口方法：

- 无

### 图元类

- 无

### 类型别名

- 无

### 变量

- 无
