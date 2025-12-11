# Ausmo - AAC Multi-Role Platform

A comprehensive React Native + Expo AAC (Augmentative and Alternative Communication) platform designed to support children with autism and their collaborative care teams. The platform provides role-based access for Parents, Teachers, and Therapists, enabling seamless collaboration and communication development.

**Ausmo** empowers families and professionals to work together in supporting children's communication journey through intuitive tools, real-time collaboration, and comprehensive progress tracking.

## 🌟 Features

### Core Communication Features
- **Express Communication Board**: Drag-and-drop symbol layout with real-time sync
- **OpenSymbols Integration**: Access to thousands of free pictograms via OpenSymbols API
- **Local Symbol Library**: Built-in Bliss symbols and Mulberry symbols for offline use
- **Custom Symbol Upload**: Upload and manage personalized communication symbols
- **Favorites System**: Mark frequently used symbols for quick access
- **Text-to-Speech**: Customizable voices, pitch, and speed with multiple voice types
- **Audio Recording**: Record custom audio for symbols (30 seconds)
- **Symbol Search**: Advanced search with filters and categories
- **Symbol Sizing**: Small, medium, and large symbol sizes for different needs
- **Color Themes**: Multiple color schemes for visual preferences

### Multi-Role Architecture
- **Parent Role**: Child profile management, team collaboration, progress tracking, communication board customization
- **Teacher Role**: Student management, IEP goals, behavior tracking, lesson planning, classroom integration
- **Therapist Role**: Patient management, session notes, treatment plans, progress tracking, assessment tools
- **Admin Role**: System management, user administration, analytics dashboard
- **Role Switching**: Seamless switching between roles for multi-role users
- **Collaborative Care**: Real-time messaging and shared notes between team members
- **Child Profiles**: Comprehensive child information including diagnosis, communication level, preferences

### Security & Compliance
- **PIN Security**: bcrypt hashed PINs with biometric authentication support
- **Row Level Security (RLS)**: Database-level data isolation and access controls
- **HIPAA Compliance**: Health information protection and audit logging
- **FERPA Compliance**: Educational records protection and parent access rights
- **COPPA Compliance**: Children's data protection and parental consent
- **Email Security**: Custom Mailjet integration for secure email communications
- **Authentication**: Supabase Auth with custom profile management
- **Data Encryption**: End-to-end encryption for sensitive data

### Real-time Collaboration
- **Direct Messaging**: Real-time chat between team members with Supabase Realtime
- **Shared Notes**: Team-wide updates and observations
- **Progress Tracking**: Collaborative goal and progress management
- **Live Updates**: Real-time synchronization across all devices
- **Offline Support**: Full functionality with automatic sync when online
- **Team Management**: Connect parents with teachers and therapists
- **Connection Status**: Real-time connection monitoring and reconnection

### Goals & Progress Management
- **SMART Goals**: IEP, treatment, and home practice goals with SMART criteria
- **Task Management**: Break down goals into manageable tasks
- **Progress Tracking**: 1-5 scale ratings with detailed observations
- **Visual Analytics**: Charts and progress visualization
- **Export Reports**: PDF reports for sharing and documentation
- **Goal Assignment**: Assign goals to specific team members
- **Progress Logging**: Detailed progress entries with timestamps
- **Goal Templates**: Pre-built goal templates for common objectives

### Accessibility & Performance
- **Screen Reader Support**: Complete VoiceOver/TalkBack integration
- **High Contrast Mode**: Enhanced visibility for all users
- **Large Text Support**: Dynamic Type and scalable text
- **Haptic Feedback**: Tactile feedback for all interactions
- **Performance Optimized**: FlashList, image optimization, and caching
- **Web Compatibility**: Full React Native Web support with CORS proxy handling
- **Cross-Platform**: Native iOS, Android, and Web applications
- **Responsive Design**: Adaptive layouts for different screen sizes
- **Localization**: Date formatting and regional preferences (MM-DD-YYYY, DD-MM-YYYY, YYYY-MM-DD)

### Technical Stack & Services
- **Frontend**: React Native + Expo with TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Realtime, Storage)
- **State Management**: Redux Toolkit with RTK Query
- **Navigation**: React Navigation v6
- **Email Service**: Mailjet for transactional and marketing emails
- **Symbol APIs**: OpenSymbols.org integration with CORS proxy support
- **Image Storage**: Supabase Storage with Cloudinary integration
- **Error Tracking**: Sentry for crash reporting and performance monitoring
- **Testing**: Jest with React Native Testing Library
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Clone the repository
```bash
git clone https://github.com/GM-Sage/ausmoapp.git
cd ausmoapp
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm start
```

5. Run on your platform
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📱 Platform Support

- ✅ iOS 13.0+
- ✅ Android 6.0+
- ✅ Web (Progressive Web App)

## 🛠️ Development

### Project Structure

```
ausmo/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Common components (Header, Button, etc.)
│   │   ├── communication/  # Communication board components
│   │   └── navigation/     # Navigation components
│   ├── screens/            # Screen components
│   │   ├── auth/          # Authentication screens
│   │   ├── parent/        # Parent-specific screens
│   │   ├── teacher/       # Teacher-specific screens
│   │   ├── therapist/     # Therapist-specific screens
│   │   └── admin/         # Admin screens
│   ├── navigation/        # Navigation configuration
│   ├── services/          # Business logic and API calls
│   │   ├── authService.ts      # Authentication management
│   │   ├── childService.ts     # Child profile management
│   │   ├── mailjetService.ts   # Email service
│   │   ├── openSymbolsService.ts # Symbol API integration
│   │   ├── realtimeService.ts  # Real-time collaboration
│   │   └── supabaseDatabaseService.ts # Database operations
│   ├── store/             # Redux store and slices
│   │   └── slices/        # Redux slices (user, auth, etc.)
│   ├── utils/             # Utility functions
│   │   ├── dateUtils.ts   # Date formatting and localization
│   │   ├── platformUtils.ts # Platform-specific utilities
│   │   └── placeholderUtils.ts # Placeholder image generation
│   ├── contexts/          # React contexts
│   ├── types/             # TypeScript type definitions
│   ├── config/            # Configuration files
│   │   ├── supabase.ts    # Supabase client configuration
│   │   ├── openSymbols.ts # OpenSymbols API configuration
│   │   └── mailjet.ts     # Mailjet email configuration
│   └── constants/         # App constants
├── assets/                # Images, sounds, and symbols
│   ├── bliss_svg/        # Bliss symbol library
│   ├── mulberry-symbols/ # Mulberry symbol library
│   └── images/           # App images and icons
├── docs/                 # Documentation
│   ├── MAILJET_SETUP.md  # Mailjet configuration guide
│   └── DATABASE_SCHEMA.md # Database documentation
├── legal/                # Legal documents (Privacy Policy, etc.)
└── supabase-multi-role-migration-*.sql # Database migration files
```

### Available Scripts

```bash
npm start           # Start Expo dev server
npm test            # Run tests
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
npm run type-check  # Run TypeScript type checking
npm run validate    # Run all checks (lint, type-check, test)
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenSymbols API
EXPO_PUBLIC_OPENSYMBOLS_SECRET=your_opensymbols_secret

# Mailjet Email Service
MAILJET_API_KEY=your_mailjet_api_key
MAILJET_SECRET_KEY=your_mailjet_secret_key
MAILJET_FROM_EMAIL=noreply@ausmo.app
MAILJET_FROM_NAME=Ausmo

# Cloudinary Image Storage
EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
EXPO_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Sentry Error Tracking
EXPO_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_sentry_org
SENTRY_PROJECT=ausmoapp
ENABLE_CRASH_REPORTING=true

# Legal & Support URLs
EXPO_PUBLIC_PRIVACY_POLICY_URL=https://ausmo.app/privacy
EXPO_PUBLIC_TERMS_OF_SERVICE_URL=https://ausmo.app/terms
EXPO_PUBLIC_SUPPORT_URL=https://ausmo.app/support
EXPO_PUBLIC_SUPPORT_EMAIL=support@ausmo.app

# Feature Flags
EXPO_PUBLIC_ENABLE_CLOUD_SYNC=true
EXPO_PUBLIC_ENABLE_TEMPLATE_GALLERY=true
EXPO_PUBLIC_ENABLE_QUIZ_MODE=true
EXPO_PUBLIC_ENABLE_ANALYTICS=true
```

### Supabase Setup

1. Create a Supabase project at https://supabase.com
2. Set up the required database tables (see `docs/DATABASE_SCHEMA.md`)
3. Enable Row Level Security (RLS) policies
4. Add your Supabase URL, anon key, and service role key to `.env`

### OpenSymbols Setup

1. Sign up for OpenSymbols API access at https://www.opensymbols.org/
2. Get your API secret key
3. Add `EXPO_PUBLIC_OPENSYMBOLS_SECRET` to your `.env` file
4. The app will automatically handle CORS proxy for web platform

### Mailjet Email Setup

1. Create a Mailjet account at https://www.mailjet.com/
2. Get your API key and secret key from the dashboard
3. Add Mailjet credentials to your `.env` file
4. Verify your sending domain for better deliverability
5. See `docs/MAILJET_SETUP.md` for detailed instructions

### Cloudinary Setup (Optional)

1. Create a Cloudinary account at https://cloudinary.com/
2. Get your cloud name, API key, and API secret
3. Add Cloudinary credentials to your `.env` file
4. Used for advanced image processing and optimization

### Sentry Setup (Optional)

1. Create a Sentry project at https://sentry.io
2. Add your Sentry DSN to `.env`
3. Sentry will automatically capture errors and performance data

## 📦 Building for Production

### iOS

```bash
# Build for iOS
npm run build:ios

# Or using EAS Build
eas build --platform ios
```

### Android

```bash
# Build for Android
npm run build:android

# Or using EAS Build
eas build --platform android
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Symbol libraries and resources
- Open-source community
- AAC professionals and users who provided feedback

## 📞 Support

- **Email**: support@ausmo.app
- **Issues**: https://github.com/GM-Sage/ausmoapp/issues
- **Discussions**: https://github.com/GM-Sage/ausmoapp/discussions

## 🔒 Privacy & Security

We take privacy seriously. See our [Privacy Policy](legal/PRIVACY_POLICY_TEMPLATE.md) for details.

- No data collection without consent
- COPPA compliant
- Local-first architecture
- Optional cloud sync with encryption

## 📚 Documentation

### Technical Documentation
- [Setup Guide](docs/SETUP_GUIDE.md) - Complete development environment setup
- [Multi-Role Architecture](docs/MULTI_ROLE_ARCHITECTURE.md) - System architecture overview
- [Database Schema](docs/DATABASE_SCHEMA.md) - Complete database documentation
- [API Documentation](docs/API_DOCUMENTATION.md) - Service method documentation
- [Security & Accessibility Guide](docs/SECURITY_ACCESSIBILITY_GUIDE.md) - Compliance and accessibility
- [Mailjet Setup Guide](docs/MAILJET_SETUP.md) - Email service configuration
- [OpenSymbols Integration](docs/OPENSYMBOLS_INTEGRATION.md) - Symbol API integration guide

### User Guides
- [Parent User Guide](docs/USER_GUIDES/PARENT_USER_GUIDE.md) - Complete parent guide
- [Teacher User Guide](docs/USER_GUIDES/TEACHER_USER_GUIDE.md) - Complete teacher guide
- [Therapist User Guide](docs/USER_GUIDES/THERAPIST_USER_GUIDE.md) - Complete therapist guide

## 🗺️ Roadmap

### ✅ Completed Features
- [x] Multi-role authentication system with Supabase
- [x] Child profile management with comprehensive data
- [x] OpenSymbols API integration with CORS proxy support
- [x] Mailjet email service for transactional emails
- [x] Real-time collaboration with Supabase Realtime
- [x] Cross-platform web support with React Native Web
- [x] Localized date formatting (MM-DD-YYYY, DD-MM-YYYY, YYYY-MM-DD)
- [x] Row Level Security (RLS) for data protection
- [x] Custom symbol upload and management
- [x] Goals and progress tracking system
- [x] Team collaboration and messaging

### 🚧 In Progress
- [ ] Advanced analytics dashboard
- [ ] Enhanced goal visualization
- [ ] Improved offline sync capabilities

### 📋 Planned Features
- [ ] AI-powered symbol suggestions
- [ ] Multi-language support (Spanish, French, German, Chinese)
- [ ] Integration with therapy platforms (TheraPlatform, SimplePractice)
- [ ] Apple Watch companion app
- [ ] Eye-tracking support for accessibility
- [ ] Voice recognition for symbol selection
- [ ] Advanced parent-teacher communication portal
- [ ] Mobile app store deployment (iOS App Store, Google Play)

## ⚡ Performance

- Fast startup time (< 2 seconds)
- Smooth 60fps animations
- Optimized image loading
- Efficient memory usage
- Works offline

## 🌐 Internationalization

Currently supported languages:
- English (US)

Coming soon:
- Spanish
- French
- German
- Chinese (Simplified)

---

Built with Next.js 15, TypeScript, and Tailwind CSS.