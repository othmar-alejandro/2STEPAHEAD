# 2 Step Ahead Tutoring - Implementation Guide

## ✅ What Was Completed

### Phase 1: Critical Functionality Fixes (COMPLETED)

#### 1. Google Forms Integration ✅
- **File Updated:** `src/pages/Contact.tsx`
- **What Changed:** Embedded your existing Google Form for contact/scheduling
- **Result:** Users can now fill out the contact form to schedule assessments

#### 2. All CTA Buttons Now Functional ✅
- **Files Updated:**
  - `src/pages/Home.tsx`
  - `src/pages/Pricing.tsx`
  - `src/pages/TestPrep.tsx`
  - All 6 service pages (HighSchool, MiddleSchool, Elementary, PreK, Homeschool, SpecialNeeds)
- **What Changed:** All "Schedule Free Assessment" buttons now navigate to the Contact page
- **Result:** Complete user conversion funnel - users can now reach you!

#### 3. Centralized Configuration ✅
- **New File:** `src/config/contact.ts`
- **What It Does:** Single place to update contact info, social media links, and payment links
- **Benefit:** Change your phone/email once and it updates everywhere

#### 4. Footer Improvements ✅
- **File Updated:** `src/components/Footer.tsx`
- **What Changed:**
  - Social media icons only show when URLs are added
  - Copyright year is now dynamic (auto-updates each year)
  - Uses centralized contact info

#### 5. Accessibility Enhancements ✅
- **Files Updated:**
  - `src/components/Navbar.tsx` - Added ARIA labels to mobile menu and dropdown
  - `src/layouts/MainLayout.tsx` - Added "Skip to main content" link for keyboard users
- **Result:** Better experience for users with disabilities

---

## 🔧 How to Add Your Information

### Adding Social Media Links

**File to Edit:** `src/config/contact.ts`

Find this section:
```typescript
export const SOCIAL_LINKS = {
  facebook: '', // Example: 'https://facebook.com/2stepahead'
  instagram: '', // Example: 'https://instagram.com/2stepahead'
  linkedin: '', // Example: 'https://linkedin.com/company/2stepahead'
};
```

**Instructions:**
1. Replace the empty `''` with your actual social media URL
2. Keep the quotes around the URL
3. Save the file

**Example:**
```typescript
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/2stepaheadtutoring',
  instagram: 'https://instagram.com/2stepaheadtutoring',
  linkedin: '', // Leave empty if you don't have LinkedIn yet
};
```

**Result:** Icons will automatically appear in the footer with your links!

---

### Adding Square Payment Links

**File to Edit:** `src/config/contact.ts`

Find this section:
```typescript
export const PAYMENT_LINKS = {
  homeworkHelp: '', // $30/hr
  personalizedLesson: '', // $40/hr
  testPrep: '', // $55/hr
  // ... more options
};
```

**Step-by-Step Setup:**

#### 1. Create Square Account
- Go to https://squareup.com
- Sign up for a free account
- Complete account verification

#### 2. Create Payment Links
- Log into Square Dashboard
- Go to **Online Checkout** → **Payment Links**
- Click **Create Payment Link**
- Set up each service:
  - **Name:** "Homework Help - 1 Hour Session"
  - **Price:** $30
  - **Description:** "60-minute homework help session"
  - Click **Save**
- Copy the generated payment link (looks like `https://square.link/u/XXXXXX`)

#### 3. Paste Links into Config File
```typescript
export const PAYMENT_LINKS = {
  homeworkHelp: 'https://square.link/u/ABC123',
  personalizedLesson: 'https://square.link/u/DEF456',
  testPrep: 'https://square.link/u/GHI789',
  summerSATEarlyBird: 'https://square.link/u/JKL012',
  // ... add others as needed
};
```

#### 4. Update Buttons to Use Payment Links

**Example - For the Summer SAT enrollment button:**

**File:** `src/pages/Home.tsx` (around line 438)

**Change from:**
```typescript
<Link to="/contact?service=summer-sat" className="...">
  Enroll Now - Contact Us
</Link>
```

**Change to:**
```typescript
import { PAYMENT_LINKS } from '../config/contact';

// Later in the component:
<a
  href={PAYMENT_LINKS.summerSATEarlyBird}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Enroll Now - Secure Checkout
</a>
```

**Do this for all payment buttons throughout the site!**

---

### Updating Contact Information

**File to Edit:** `src/config/contact.ts`

```typescript
export const CONTACT_INFO = {
  phone: '(786) 282-9626',       // Update if phone changes
  phoneRaw: '7862829626',         // Update if phone changes (no formatting)
  email: '2satutoring@gmail.com', // Update if email changes
  serviceArea: 'West Kendall & Greater Miami',
  hours: 'Mon-Sat: 9am-8pm',
  businessName: '2 Step Ahead Tutoring',
};
```

**When you change this, it automatically updates in:**
- Contact page
- Footer
- All phone/email links

---

## 🚀 Testing Your Changes

### Test the Contact Form
1. Go to https://yourwebsite.com/contact
2. You should see the Google Form embedded
3. Try filling it out to make sure it works

### Test CTA Buttons
1. Click any "Schedule Free Assessment" button
2. It should take you to `/contact` page
3. The URL might include `?service=high-school` or similar (this is normal)

### Test Social Media Links (After Adding URLs)
1. Scroll to the footer
2. Click each social media icon
3. Should open your social media page in a new tab

### Test Payment Links (After Adding Square URLs)
1. Click "Enroll Now" or "Choose Plan" buttons
2. Should redirect to Square checkout page
3. Test with a small amount first!

---

## 📱 Mobile Testing

**Important:** Test on actual mobile devices!

1. Open website on your phone
2. Test all buttons
3. Fill out the contact form
4. Make sure everything looks good

---

## 🔍 What Each Query Parameter Means

When users click different buttons, you'll see URLs like:
- `/contact?service=high-school` - User came from High School service page
- `/contact?service=test-prep` - User wants test prep info
- `/contact?plan=homework-help` - User selected Homework Help plan
- `/contact?referrer=pricing` - User came from Pricing page

**Why This Matters:**
- When viewing form submissions, you can see which page sent the user
- Helps you understand which services are most popular
- You can customize follow-up based on their interest

---

## ⚠️ Important Notes

### Security
- **NEVER accept credit card numbers directly on your site**
- Always use Square's checkout page for payments
- Current credit card input fields have been removed for security

### Google Form
- Your form is embedded at: `https://docs.google.com/forms/d/e/1FAIpQLSdoGdZIB8Bh-OlDXhjUZYNpFIYuNpnL8eY9rlT3buE8oDAT5w/viewform`
- If you update the form in Google, changes appear automatically
- If you create a NEW form, update the URL in `src/pages/Contact.tsx` line 92

### Deploying Changes
After editing any files:
```bash
npm run build
```
Then upload the `dist/` folder to your web host

---

## 📋 Quick Reference

### Files You Might Edit
1. **Contact Info:** `src/config/contact.ts`
2. **Contact Form:** `src/pages/Contact.tsx`
3. **Payment Buttons:** Various page files (Home, Pricing, etc.)

### Common Tasks
- **Change Phone Number:** Edit `src/config/contact.ts`
- **Update Social Media:** Edit `src/config/contact.ts`
- **Add Payment Links:** Edit `src/config/contact.ts` then update button links
- **Change Form:** Edit `src/pages/Contact.tsx` line 92

---

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors (Press F12)
2. Make sure all URLs have quotes around them
3. Ensure no typos in file paths
4. Test in incognito/private mode

---

## ✨ Future Enhancements

When you're ready, consider adding:
1. **Google Analytics** - Track visitors and conversions
2. **Live Chat Widget** - Instant communication (Tawk.to, Tidio)
3. **Email Automation** - Automatic follow-ups
4. **Testimonials** - Replace placeholder data with real reviews
5. **Blog Section** - Share tutoring tips and resources

---

**Last Updated:** December 2024
**Status:** ✅ Production Ready (after adding Square payment links)
