/**
 * Registration Types and Configuration
 */

export interface RegistrationFormData {
  fullName: string;
  email: string;
  attendanceMode: 'virtual' | 'in-person';
  trackPreference: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  teamStatus: 'has-team' | 'looking-for-team' | 'solo';
  discordHandle?: string;
  newsletterOptIn: boolean;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  confirmationId?: string;
  errors?: Record<string, string>;
}

/**
 * Pluggable registration handler.
 * Can connect to Cloudflare Worker, Supabase, Google Sheets API, or custom REST endpoint.
 */
export async function submitRegistration(data: RegistrationFormData): Promise<RegistrationResponse> {
  // Check for endpoint override if configured
  const endpoint = typeof window !== 'undefined' ? (window as any).__REGISTRATION_API_URL__ : null;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      return {
        success: false,
        message: 'Network connection failed. Please try again or reach out on Discord.',
      };
    }
  }

  // Simulated instant client response for demonstration & prototyping
  await new Promise((resolve) => setTimeout(resolve, 1100));

  // Basic validation check
  if (!data.email || !data.email.includes('@')) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
      errors: { email: 'Invalid email address' },
    };
  }

  if (!data.fullName || data.fullName.trim().length < 2) {
    return {
      success: false,
      message: 'Please provide your full name.',
      errors: { fullName: 'Name is required' },
    };
  }

  const mockConfirmation = `HK26-${Math.floor(1000 + Math.random() * 9000)}`;

  return {
    success: true,
    message: 'Welcome to Hack The Future 2026! Check your inbox for starter kit access.',
    confirmationId: mockConfirmation,
  };
}
