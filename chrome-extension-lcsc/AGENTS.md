# PROJECT KNOWLEDGE BASE

**Generated:** 2026-02-24 20:21:23
**Commit:** working directory state
**Branch:** unknown

## OVERVIEW
Chrome extension for reading LCSC (立创商城) component details and integrating with ElecAntifreeze system. Extracts component data from LCSC pages and adds to local system via API calls.

## STRUCTURE
```
./
├── Layer1_apiIO.js    # API communication layer (skeleton)
├── Layer2_funcHandle.js  # Data processing layer (skeleton)
├── Layer3_UI.js       # UI layer - floating panel
├── background.js      # Service worker (API proxy)
├── popup.js           # Settings popup
├── popup.html         # Popup UI
├── manifest.json      # Chrome extension manifest
├── content-style.css  # Extension styling
├── css/               # Bootstrap CSS files
└── js/                # Bootstrap JS files
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| UI Components | Layer3_UI.js | Floating panel creation/management |
| Data Processing | Layer2_funcHandle.js | Component data parsing |
| API Calls | Layer1_apiIO.js | External API communication |
| Background API | background.js | CORS bypass, API proxy |
| Settings UI | popup.js + popup.html | User configuration |
| Styling | content-style.css | Panel CSS + Bootstrap |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| STORAGE_KEY | Constant | popup.js, Layer3_UI.js | Storage key for URL configs |
| URL_MATCH_PATTERN | Array | Layer2_funcHandle.js | URL pattern matching |
| addComp | Function | Layer1_apiIO.js | API function (skeleton) |
| togglePanel | Function | Layer3_UI.js | UI panel visibility |
| COMPONENTS_KEY | Constant | Layer3_UI.js | Storage for components |

## CONVENTIONS

### File Structure
- **Layer1_*:** API communication (external dependencies)
- **Layer2_*:** Data processing and business logic
- **Layer3_*:** UI and user interaction
- **background.js:** Service worker (always active)
- **popup.*:** Settings interface (on-demand)

### JavaScript Style
- ES6+ with strict mode
- JSDoc comments for all functions
- IIFE for content scripts
- Async/await for API calls
- Error handling with try/catch

### CSS Styling
- CSS custom properties for theming
- BEM-like naming: `.lcsc-panel .panel-header`
- Responsive design with media queries
- Bootstrap utilities for popup

## ANTI-PATTERNS (THIS PROJECT)

### Code Organization
- **DON'T** mix UI logic in Layer2
- **DON'T** put API calls in Layer3
- **DON'T** use inline styles in HTML
- **DON'T** hardcode URLs except in manifest

### Performance
- **DON'T** inject CSS on every page (content scripts only)
- **DON'T** use synchronous chrome APIs
- **DON'T** store large data in chrome.storage
- **DON'T** create DOM elements repeatedly

### Security
- **DON'T** expose sensitive URLs in logs
- **DON'T** use eval() for JSON parsing
- **DON'T** trust user input without validation
- **DON'T** bypass CORS in background without caution

## UNIQUE STYLES

### Console Logging
- Structured logging with prefixes: `[LCSC读取器]`
- Color-coded messages for different levels
- Consistent timestamp format

### Chrome Extension Patterns
- Service worker in background.js
- Message passing between scripts
- Chrome storage API for persistence
- Content script injection at document_idle

### Layer Architecture
- Clear separation of concerns
- Each layer has single responsibility
- Layer3 → Layer2 → Layer1 data flow
- Event-driven UI updates

## COMMANDS

### Development
```bash
# Load extension in Chrome
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select this directory

# Testing popup
# Open extension popup via chrome action or chrome://extensions/

# Testing content script
# Navigate to https://item.szlcsc.com/*.html*

# Debugging
# Open DevTools on extension pages
# Use console.log with structured logging
```

### Build/Deploy
```bash
# No build process required
# Direct Chrome extension loading
# Manifest V3 required
```

### Testing
```bash
# Manual testing only
# Test on actual LCSC pages
# Verify popup functionality
# Check API connectivity
```

## NOTES

### Chrome Extension Specific
- Uses Manifest V3 (service worker)
- Content scripts run at document_idle
- Background script handles CORS bypass
- Chrome storage for persistence

### Integration Points
- LCSC website: item.szlcsc.com/*.html*
- Local API: http://localhost:11451/*
- Chrome storage: lcsc_url_configs key

### Performance Considerations
- Content scripts are lightweight
- CSS injection minimized
- No heavy DOM manipulation
- Efficient storage usage

### Common Issues
- CORS requires background proxy
- Popup sizing constrained (max 600px height)
- Content script timing matters
- Storage quota limits apply