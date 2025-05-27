# Rahuketu - Personal Blog Application
## Project Requirements & Specifications

### Overview
Rahuketu is a modern, interactive personal blog application built with SvelteKit 2.x and Firebase. The application features an infinite, scrollable and zoomable bento grid layout that serves as the main navigation and content discovery interface. The design is inspired by modern portfolio websites with a unique twist on content presentation through various bento card layouts.

---

## Technical Stack

### Frontend
- **Framework**: SvelteKit 2.20+ with Svelte 5 and Runes API
- **Styling**: CSS with custom animations and enhanced image handling
- **Animations**: Anime.js v4.0.2 for smooth transitions and morphing effects
- **State Management**: Svelte 5 Runes ($state, $derived, $effect) and $app/state
- **Markdown**: MDSvex for blog content processing with enhanced preprocessing
- **Type Safety**: TypeScript with strict mode and enhanced validation
- **Code Quality**: ESLint 9.x with TypeScript ESLint and Prettier 3.x

### Backend & Services
- **Hosting**: Firebase Hosting with edge optimization
- **Database**: Firestore with enhanced indexing and real-time subscriptions
- **Storage**: Firebase Cloud Storage with automatic image optimization
- **Authentication**: Firebase Auth with enhanced security features
- **Functions**: Firebase Cloud Functions with v2 runtime
- **Security**: Firebase App Check with reCAPTCHA Enterprise
- **Performance**: Enhanced fetch with automatic deduplication

### Development Tools
- **Package Manager**: npm with .npmrc optimization
- **Build Tool**: Vite 6.x with enhanced bundling strategies
- **Adapter**: @sveltejs/adapter-node with custom server capabilities
- **Image Handling**: @sveltejs/enhanced-img for automatic optimization
- **CLI Tools**: SvelteKit unified CLI (sv) for project management
- **Type Checking**: TypeScript 5.x with svelte-check 4.x

---

## SvelteKit 2.x Enhanced Features

### Svelte 5 Runes Integration
- **Reactive State**: Using $state() for component state management
- **Derived Values**: $derived() for computed values and reactive calculations  
- **Side Effects**: $effect() for handling side effects and cleanup
- **Props Handling**: $props() for component property management
- **Cross-file Reactivity**: Shared reactive state in .svelte.js files

### Enhanced Routing System
- **Shallow Routing**: pushState/replaceState for modal and tab navigation
- **Parameter Matchers**: Custom parameter validation for route segments
- **Route Groups**: Organized routing with parentheses grouping
- **Advanced Load Functions**: Enhanced with improved fetch and streaming
- **Reroute Hook**: URL transformation for internationalization support

### Performance Optimizations
- **Bundle Strategies**: Configurable bundling (split/single/inline)
- **Enhanced Fetch**: Automatic deduplication and cookie preservation
- **Image Optimization**: Built-in responsive image generation
- **Server-Side Utilities**: getRequestEvent() for server context access
- **Transport Hook**: Custom class serialization across server/client

### Modern Development Experience
- **Form Actions**: Progressive enhancement with automatic CSRF protection
- **Error Boundaries**: Enhanced error handling with better user experience
- **Hot Module Replacement**: Faster development with Vite 6.x
- **WebSocket Support**: Native WebSocket integration for real-time features
- **Asynchronous Components**: Future-ready async/await component patterns

---

## Application Architecture

### Core Layout Structure

#### Main Grid System
- **Grid Type**: Infinite bento grid with dynamic cell sizing using CSS Grid
- **Grid Dimensions**: Expandable in all four directions with virtual scrolling
- **Cell Size**: Variable (1x1, 1x2, 2x1, 2x2, 3x1, L-shaped combinations)
- **Center Point**: Bio card positioned at exact center of viewport on load
- **Navigation**: Drag/pan with momentum and touch gesture support
- **Zoom**: Smooth zoom with hardware acceleration and gesture recognition
- **Performance**: Intersection Observer for lazy loading and memory management

#### Svelte 5 State Management
```javascript
// Global grid state using Svelte 5 runes
// src/lib/state/grid.svelte.js
let gridPosition = $state({ x: 0, y: 0 });
let zoomLevel = $state(1);
let selectedCard = $state(null);

const gridBounds = $derived({
  minX: gridPosition.x - 1000,
  maxX: gridPosition.x + 1000,
  minY: gridPosition.y - 1000,
  maxY: gridPosition.y + 1000
});

$effect(() => {
  // Handle grid position changes and update visible cards
  updateVisibleCards(gridPosition, zoomLevel);
});
```

#### Enhanced Card Categories

##### Inner Cards (Central Area - Unique)
Using Svelte 5 components with runes for optimal performance:

1. **bioCard** (1x2) - Professional bio with $state management
2. **skillTree** (2x2) - Interactive skills with $derived progress
3. **experienceMap** (3x1) - Timeline with smooth animations
4. **highlights** (2x1) - Achievements with real-time updates
5. **photoBooth** (1x2) - Image carousel with lazy loading
6. **rahulAsks** (1x1) - Interactive questions with state persistence
7. **askRahul** (1x1) - FAQ with search functionality
8. **moodIndicator** (1x1) - Real-time mood updates
9. **newsMarquee** (3x1) - Live news ticker with WebSocket updates
10. **socialTray** (2x1) - Social media integration with live feeds
11. **contactRahul** (1x2) - Contact form with form actions
12. **resumeDownload** (1x1) - Document download with analytics
13. **featuredAreaOne** (2x2) - Primary showcase with enhanced images
14. **featuredAreaTwo** (2x1) - Secondary content with animations
15. **featuredAreaThree** (1x2) - Tertiary content with interactions

##### Outer Cards (Surrounding Area - Dynamic)
Chronologically arranged with enhanced performance:

1. **blogArticles** - MDSvex processed content with enhanced images
2. **caseStudies** - Project showcases with interactive elements
3. **socialEmbed** - Real-time social media integration
4. **photoUpdate** - Optimized image galleries with WebP support
5. **clientTestimonial** - Dynamic testimonials with animations
6. **breakingNews** - Real-time updates with WebSocket connections

---

## Enhanced User Interface Components

### Fixed Navigation Elements with Svelte 5

#### Top-Right Action Icons (Using $state for UI management)
```javascript
// src/lib/state/navigation.svelte.js
let searchOpen = $state(false);
let authDrawerOpen = $state(false);
let dashboardOpen = $state(false);
let legalDrawerOpen = $state(false);
let isAuthenticated = $state(false);

const visibleIcons = $derived(() => {
  return isAuthenticated 
    ? ['search', 'auth', 'dashboard', 'legal']
    : ['search', 'auth', 'legal'];
});
```

1. **Search Icon** - Enhanced drawer with real-time search using $derived
2. **Login/Logout Icon** - Secure authentication with Firebase Auth v11
3. **Dashboard Icon** - Admin interface with role-based access
4. **Legal Icon** - Footer links with shallow routing

#### Mini Map (Bottom-Left Corner)
- **Enhanced Rendering**: Virtual scrolling for performance
- **Real-time Updates**: $effect for position synchronization
- **Touch Optimized**: Gesture recognition for mobile devices
- **Performance**: GPU-accelerated with intersection observers

---

## Enhanced Content Management System

### Svelte 5 Admin Capabilities

#### Form Actions Integration
```javascript
// src/routes/admin/content/+page.server.js
export const actions = {
  updateCard: async ({ request, locals }) => {
    if (!locals.user?.isAdmin) {
      throw error(403, 'Unauthorized');
    }
    
    const formData = await request.formData();
    // Process form with automatic CSRF protection
    return { success: true };
  }
};
```

#### Enhanced Content Types with TypeScript 5.x
```typescript
// src/lib/types/content.ts
interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDSvex processed
  featuredImage: EnhancedImage;
  author: Author;
  publishedAt: Date;
  updatedAt: Date;
  tags: readonly string[];
  category: ContentCategory;
  readTime: number;
  status: 'draft' | 'published' | 'archived';
  gridPosition?: GridPosition;
  cardSize: CardSize;
  seo: SEOMetadata;
}

interface EnhancedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  formats: {
    webp?: string;
    avif?: string;
  };
  srcset: string;
}
```

---

## Modern Animation & Interaction Design

### Enhanced Animation System
- **Library**: Anime.js v4.0.2 with GPU acceleration
- **Performance**: 60fps animations with hardware acceleration
- **Accessibility**: Respects prefers-reduced-motion settings
- **Mobile**: Touch-optimized with gesture recognition

### Svelte 5 Animation Integration
```javascript
// src/lib/utils/animations.svelte.js
let animationState = $state('idle');
let currentAnimation = $state(null);

const animateCardMorph = $effect(() => {
  if (animationState === 'morphing') {
    // Trigger Anime.js animation with cleanup
    currentAnimation = anime({
      targets: '.card',
      scale: [1, 1.5],
      duration: 300,
      easing: 'easeOutCubic'
    });
  }
});
```

---

## Enhanced Database Design with Firestore

### Optimized Collections Structure
```
/content_v2
  /innerCards
    /{cardType} - Enhanced with real-time listeners
  /outerCards  
    /{id} - Optimized queries with composite indexes
  /metadata
    /siteConfig - Enhanced configuration management
    /analytics - Real-time analytics with aggregation
    /cache - Intelligent caching with TTL

/users_v2
  /{userId} - Enhanced security with App Check

/realtime
  /{sessionId} - WebSocket state management
```

### Enhanced Security Rules
```javascript
// Firestore rules with enhanced security
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /content_v2/{document=**} {
      allow read: if request.auth != null || resource.data.public == true;
      allow write: if request.auth != null && 
                   get(/databases/$(database)/documents/users_v2/$(request.auth.uid)).data.role == 'admin' &&
                   request.app_check_token != null;
    }
  }
}
```

---

## Enhanced Performance Optimization

### SvelteKit 2.x Performance Features
- **Enhanced Fetch**: Automatic deduplication and streaming
- **Bundle Strategies**: Optimized code splitting with configurable strategies
- **Image Optimization**: @sveltejs/enhanced-img with automatic format selection
- **Server Utilities**: getRequestEvent() for efficient server-side operations
- **Virtual Scrolling**: Only render visible grid cells
- **Intersection Observer**: Lazy load cards as they enter viewport

### Progressive Enhancement Pattern
```javascript
// src/routes/+layout.server.js
export async function load({ fetch, url }) {
  // Enhanced fetch with automatic deduplication
  const [config, initialContent] = await Promise.all([
    fetch('/api/config').then(r => r.json()),
    fetch(`/api/content?viewport=${url.searchParams.get('viewport')}`).then(r => r.json())
  ]);
  
  return {
    config,
    initialContent,
    // Stream additional content
    lazyContent: fetch('/api/content/lazy').then(r => r.json())
  };
}
```

---

## Enhanced SEO & Accessibility

### SvelteKit 2.x SEO Features
- **Dynamic Meta Tags**: Server-side generated with enhanced routing
- **Structured Data**: JSON-LD with real-time updates
- **Sitemap Generation**: Automatic XML sitemap with dynamic routes
- **Enhanced Images**: Automatic alt text and responsive images
- **Performance**: Core Web Vitals optimization

### Enhanced Accessibility
```javascript
// src/lib/components/AccessibleCard.svelte
<script>
  let { title, content, ...props } = $props();
  let focused = $state(false);
  let pressed = $state(false);
  
  const ariaProps = $derived(() => ({
    'aria-label': title,
    'aria-pressed': pressed,
    'tabindex': 0,
    'role': 'button'
  }));
</script>

<div {...ariaProps} on:focus={() => focused = true}>
  {content}
</div>
```

---

## Enhanced Security Implementation

### Firebase Security with SvelteKit 2.x
- **App Check**: reCAPTCHA Enterprise with device attestation
- **Enhanced Auth**: Multi-factor authentication with session management
- **CSRF Protection**: Built-in with form actions
- **Content Security Policy**: Configurable CSP with SvelteKit
- **Transport Security**: Custom serialization with security validation

### Server-Side Security
```javascript
// src/hooks.server.js
import { getRequestEvent } from '$app/server';

export async function handle({ event, resolve }) {
  // Enhanced security headers
  const response = await resolve(event, {
    filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
    preload: ({ type, path }) => type === 'font' || path.includes('critical')
  });
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}
```

---

## Enhanced Development Roadmap

### Phase 1: Foundation with SvelteKit 2.x (Weeks 1-2)
- [ ] Svelte 5 project setup with enhanced features
- [ ] Firebase v11 integration with App Check
- [ ] Enhanced grid system with virtual scrolling
- [ ] $app/state navigation implementation

### Phase 2: Content System with Runes (Weeks 3-4)
- [ ] Svelte 5 inner cards with $state/$derived
- [ ] Form actions for content management
- [ ] Enhanced authentication with Firebase Auth
- [ ] Real-time updates with WebSocket support

### Phase 3: Advanced Features (Weeks 5-6)
- [ ] Anime.js v4 animation system
- [ ] Enhanced image optimization
- [ ] Advanced search with real-time filtering
- [ ] Mobile optimization with gesture support

### Phase 4: Content & Polish (Weeks 7-8)
- [ ] MDSvex content processing
- [ ] Performance optimization with enhanced fetch
- [ ] SEO with structured data and meta tags
- [ ] Security hardening with App Check

### Phase 5: Testing & Deployment (Weeks 9-10)
- [ ] Comprehensive testing with Svelte 5 features
- [ ] Accessibility audit with enhanced standards
- [ ] Performance testing with Core Web Vitals
- [ ] Production deployment with monitoring

---

## Enhanced File Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── bento/
│   │   │   ├── BentoGrid.svelte (Svelte 5 with runes)
│   │   │   ├── InnerCard.svelte (Enhanced with $state)
│   │   │   ├── OuterCard.svelte (Virtual scrolling)
│   │   │   └── cards/
│   │   │       ├── BioCard.svelte ($props integration)
│   │   │       ├── SkillTree.svelte ($derived calculations)
│   │   │       └── [other-cards].svelte
│   │   ├── navigation/
│   │   │   ├── ActionIcons.svelte (Enhanced UI state)
│   │   │   ├── MiniMap.svelte (Performance optimized)
│   │   │   └── SearchDrawer.svelte (Real-time search)
│   │   ├── admin/
│   │   │   ├── Dashboard.svelte (Form actions)
│   │   │   ├── ContentEditor.svelte (Enhanced editor)
│   │   │   └── AuthDrawer.svelte (Firebase Auth v11)
│   │   └── common/
│   │       ├── Modal.svelte (Shallow routing)
│   │       ├── Loading.svelte (Enhanced animations)
│   │       └── EnhancedImage.svelte (Auto optimization)
│   ├── state/ (Svelte 5 runes state management)
│   │   ├── auth.svelte.js
│   │   ├── content.svelte.js
│   │   ├── grid.svelte.js
│   │   └── ui.svelte.js
│   ├── utils/
│   │   ├── firebase.ts (v11 with App Check)
│   │   ├── animations.svelte.js (Anime.js integration)
│   │   ├── grid-helpers.ts (Performance optimized)
│   │   └── enhanced-fetch.ts (SvelteKit 2.x features)
│   └── types/
│       ├── content.ts (TypeScript 5.x)
│       ├── grid.ts (Enhanced definitions)
│       └── auth.ts (Firebase Auth types)
├── routes/
│   ├── +layout.svelte (Enhanced with $app/state)
│   ├── +layout.server.js (Enhanced load functions)
│   ├── +page.svelte (Svelte 5 main page)
│   ├── admin/
│   │   ├── +page.svelte (Form actions UI)
│   │   └── +page.server.js (Server actions)
│   └── api/
│       ├── content/
│       │   └── +server.js (Enhanced endpoints)
│       └── search/
│           └── +server.js (Real-time search)
├── params/
│   └── slug.js (Enhanced parameter matching)
└── app.html (Enhanced with performance hints)
```

---

## Success Metrics & Monitoring

### Enhanced Performance KPIs
- **Core Web Vitals**: LCP < 1.2s, FID < 100ms, CLS < 0.1
- **Bundle Size**: < 50KB initial, < 150KB total with code splitting
- **Animation Performance**: Consistent 60fps with GPU acceleration
- **Mobile Performance**: Lighthouse score > 95 on mobile

### Enhanced User Experience
- **Accessibility**: WCAG 2.1 AAA compliance where possible
- **Progressive Enhancement**: Full functionality without JavaScript
- **Real-time Features**: WebSocket connections with fallbacks
- **Cross-device**: Seamless experience across all device types

This comprehensive specification leverages the latest SvelteKit 2.x and Svelte 5 features for optimal performance, developer experience, and user engagement.
