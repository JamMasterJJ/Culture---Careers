export const oauthConfig = {
  linkedin: {
    clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID!,
    redirectUri: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    scopes: ["openid", "email", "profile"],
  },
}

// Supabase Auth Configuration Instructions
export const supabaseAuthSetup = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  redirectUrls: [
    `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
  ],
  providers: {
    linkedin_oidc: {
      enabled: true,
      clientId: "YOUR_LINKEDIN_CLIENT_ID",
      clientSecret: "YOUR_LINKEDIN_CLIENT_SECRET",
    },
    phone: {
      enabled: true,
      // Requires SMS provider setup (Twilio recommended)
    },
    email: {
      enabled: true,
      // Built-in email authentication
    },
  },
}
