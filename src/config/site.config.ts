export interface FooterLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  
  supportServer: string;
  
  socialLinks: SocialLink[];
  
  footerLinks: {
    resources: FooterLink[];
    legal: FooterLink[];
    contact: FooterLink[];
  };
  
  botName: string;
  botDescription: string;
  botVersion: string;
  totalServers: number;
  totalUsers: number;
  botAvatarUrl?: string;
  
  features: {
    enableCommands: boolean;
    enableDashboard: boolean;
  };
}

// Default configuration
export const siteConfig: SiteConfig = {
  botName: "Everything Bot", //hero
  botDescription: "A powerful Discord bot that brings advanced features and seamless automation to your server.",
  botVersion: "1.0.4",
  totalServers: 300,
  totalUsers: 81, // 11 = 11k to remove the k, go in components/home/hero.tsx and remove/change the K at line 72
  botAvatarUrl: "https://images-ext-1.discordapp.net/external/C31ygKiQUn_pw3qnVACuR67YzVZYCAiHiO6TqGkH0qQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/865690661188927549/cc5831c9fd1af239e0117062624f87aa.webp?format=webp&width=960&height=960",
  
  supportServer: "https://discord.gg/8KFPsZV58z",
  
  socialLinks: [
    {
      platform: "Discord", //don't change
      url: "https://discord.gg/8KFPsZV58z",
    }
  ],
  
  footerLinks: {
    contact: [
      { label: "Discord Server", url: "https://discord.gg/8KFPsZV58z" }, // u can change this
    ],
    resources: [
      // { label: "Documentation", url: "https://docs.domain.com" },
      // { label: "Blog", url: "domain.com" },
      { label: "Support", url: "https://discord.gg/8KFPsZV58z" }
    ],
    legal: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" }
    ]
  },
  
  
  siteName: "Everything", //footer
  siteDescription: "A powerful Discord bot that brings advanced features and seamless automation to your server.", //footer
  siteUrl: "https://domain.com",

  features: {
    enableCommands: true,
    enableDashboard: true
  }
};

export const getSiteConfig = (): SiteConfig => {
  return siteConfig;
};

export const updateSiteConfig = (updates: Partial<SiteConfig>): SiteConfig => {
  return {
    ...siteConfig,
    ...updates
  };
}; 