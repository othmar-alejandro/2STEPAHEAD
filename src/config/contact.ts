/**
 * Centralized contact information for 2 Step Ahead Tutoring
 * Update contact details here and they will be reflected across the entire site
 */

export const CONTACT_INFO = {
  phone: '(786) 282-9626',
  phoneRaw: '7862829626',
  email: '2satutoring@gmail.com',
  serviceArea: 'West Kendall & Greater Miami',
  hours: 'Mon-Sat: 9am-8pm',
  businessName: '2 Step Ahead Tutoring',
};

/**
 * Social media links - Leave empty strings until ready to add
 * Set to empty string '' to hide the icon, or add URL to show it
 */
export const SOCIAL_LINKS = {
  facebook: '', // Example: 'https://facebook.com/2stepahead'
  instagram: '', // Example: 'https://instagram.com/2stepahead'
  linkedin: '', // Example: 'https://linkedin.com/company/2stepahead'
};

/**
 * Square Payment Links - Add your Square payment links here
 *
 * HOW TO SET UP:
 * 1. Create a Square account at https://squareup.com
 * 2. Go to Square Dashboard → Online Checkout → Payment Links
 * 3. Create a payment link for each service/product
 * 4. Copy the payment link URL and paste it below
 * 5. When ready, update the buttons to use these links
 *
 * Example: 'https://square.link/u/YOURLINK'
 *
 * Leave empty ('') until Square account is set up
 */
export const PAYMENT_LINKS = {
  // Regular Tutoring Services (hourly rates)
  homeworkHelp: '', // $30/hr - Basic homework help
  personalizedLesson: '', // $40/hr - Customized one-on-one lessons
  testPrep: '', // $55/hr - SAT/ACT/CLT test preparation
  fullPackage: '', // $60/hr - Comprehensive support package

  // Special Programs
  summerSATEarlyBird: '', // $395 - Summer SAT Intensive (early bird pricing)
  summerSATRegular: '', // $495 - Summer SAT Intensive (regular pricing)

  // Homeschool Services
  homeschoolEvaluation: '', // $150 - Annual evaluation
  portfolioReview: '', // $75 - Portfolio review
};
