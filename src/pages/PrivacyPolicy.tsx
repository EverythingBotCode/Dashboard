import { Lock, AlertCircle, Shield, Database, Eye, Server, Trash2 } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { siteConfig } from '../config/site.config';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
              <Lock className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: August 5, 2025</p>
          </div>

          <div className="space-y-12">
            <div className="glass p-6 rounded-lg border-l-4 border-l-blue-500">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your Privacy Matters</h3>
                  <p className="text-gray-400">
                    We are committed to protecting your privacy and handling your data with transparency and care.
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                1. Data Collection
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">The Bot may collect the following data when used:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Discord server (guild) IDs and names</li>
                  <li>Channel IDs and names</li>
                  <li>Usernames, nicknames, avatars, and user IDs</li>
                  <li>Messages and interactions involving the Bot (e.g., command inputs)</li>
                  <li>Timestamps and logs of command usage</li>
                </ul>
                <p className="text-gray-300">
                  The Bot does not collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Direct messages (DMs), unless the Bot specifically supports and requires DM commands</li>
                  <li>Sensitive personal data</li>
                  <li>Any data unrelated to its operation</li>
                </ul>
                <p className="text-gray-300">
                  We only collect data that is necessary for the bot's functionality and to improve user experience.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-500" />
                2. How We Use Your Data
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">Collected data is used solely for:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing and maintaining bot services</li>
                  <li>Improving bot features and performance</li>
                  <li>Responding to your requests and support inquiries</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Moderation or automation as configured by the server administrator</li>
                  <li>Enhancing user experience</li>
                  <li>Logging and debugging</li>
                  <li>Providing core Bot features</li>
                </ul>
                {/* <p className="text-grey-300">Data is not sold, shared, or transferred to third parties.</p> */}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-500" />
                3. Data Sharing and Disclosure
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We do not sell, trade, or rent your personal information to third parties. We may share data only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>When required by law</li>
                  <li>To protect our rights and safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Server className="w-6 h-6 text-blue-500" />
                4. Data Security
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your data:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage facilities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-blue-500" />
                5. Data Retention and Deletion
              </h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  We retain data only for as long as necessary to provide our services. You can request data deletion by:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contacting our support team</li>
                  <li>Removing the bot from your server</li>
                </ul>
                <p className="text-gray-300">
                  When you remove the bot from your server, all associated data is automatically deleted within 30 days.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">6. Changes to this Policy</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  This policy may be updated at any time. Continued use of the Bot indicates acceptance of the current version.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">7. Contact Us</h2>
              <div className="glass p-6 rounded-lg space-y-4">
                <p className="text-gray-300">
                  For privacy-related questions or concerns, you can reach us through:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Discord Support Server</li>
                  <li>Email: {siteConfig.supportServer}</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}