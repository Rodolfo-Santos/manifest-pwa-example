{
      short_name: 'Short Name',
      name: 'Full Name',
      description: 'description',
      lang: 'en',
      icons: [
        {
          src: '@/static/img/icons/android-crhome-192x192.png',
          sizes: '192x192',
          type: 'images/png',
        },
        {
          src: '@/static/img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'images/png',
        },
      ],
      start_url: '/',
      background_color: '#41b883',
      display: 'fullscreen',
      orientation: 'portrait-primary',
      theme_color: '#34495e',
    },
    meta: {
      appleStatusBarStyle: 'black-translucent',
    },
    shortcuts: [
      {
        name: 'Shortcut Name',
        short_name: 'Shortcut shortname',
        description: 'Shortcut description',
        url: '?source=pwa',
        icons: [
          {
            src: '@/static/img/icons/android-crhome-192x192.png',
            sizes: '192x192',
          },
        ],
      },
    ],
  },
