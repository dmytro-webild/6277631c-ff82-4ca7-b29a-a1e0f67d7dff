"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Building, ShoppingBag, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="large"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Collections",
          id: "products",
        },
        {
          name: "For Sellers",
          id: "about",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="MODA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Style for Every Soul"
      description="Discover curated collections for men, women, and kids from the world's most innovative clothing labels."
      tag="New Season Arrivals"
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Join Brands",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sexy-model-woman-shiny-lace-evening-dress-posing-sitting-chair-beige-color_285396-7787.jpg?_wi=1",
          imageAlt: "luxury fashion models",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-beautiful-girl-posing-with-hat_23-2149067102.jpg?_wi=1",
          imageAlt: "kids fashion photography",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-luxurious-black-dress-montenegro_624325-4218.jpg",
          imageAlt: "beautiful young woman in a luxurious black dress in Montenegro",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-transgender-person-looking-away_23-2148827036.jpg",
          imageAlt: "Young transgender person looking away",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-hipster-woman-trendy-summer-black-dress-sexy-carefree-woman-posing-near-wall-brunette-model-with-makeup-hairstyle_158538-1783.jpg",
          imageAlt: "Portrait of young beautiful hipster woman in trendy summer black dress",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Trusted by 10,000+ fashion lovers"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Become a Featured Brand"
      description={[
        "Expand your reach by listing your collections on our premier platform.",
        "We provide powerful tools for brands to manage inventory, sales, and analytics.",
        "Join hundreds of designers creating the future of fashion today.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Seller",
          title: "Brand Dashboard",
          subtitle: "Total Control",
          description: "Manage your clothing catalog, set prices, and track orders with intuitive tools.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-teen-with-pink-hoodie_23-2148629629.jpg",
          imageAlt: "fashion designer working",
        },
        {
          tag: "Buyer",
          title: "Curated Shopping",
          subtitle: "Personalized Style",
          description: "Find perfect fits for men, women, and kids with our AI-driven style suggestions.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sexy-model-woman-shiny-lace-evening-dress-posing-sitting-chair-beige-color_285396-7787.jpg?_wi=2",
          imageAlt: "fashion designer working",
        },
        {
          tag: "Market",
          title: "Global Reach",
          subtitle: "Sell Everywhere",
          description: "Reach millions of fashion enthusiasts globally with built-in logistics and marketing support.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-beautiful-girl-posing-with-hat_23-2149067102.jpg?_wi=2",
          imageAlt: "fashion designer working",
        },
      ]}
      title="Why Choose MODA"
      description="Experience a seamless fashion marketplace designed for designers and shoppers."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Classic Street Tee",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/plain-white-t-shirt-with-diy-painted-design_23-2150564414.jpg",
        },
        {
          id: "2",
          name: "Silk Evening Dress",
          price: "$290",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-decoration-with-gray-cloth-heels-top-view-gray-textured-background_176474-4575.jpg",
        },
        {
          id: "3",
          name: "Kids Winter Jacket",
          price: "$85",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-girl-doing-finger-glasses_23-2149396594.jpg",
        },
        {
          id: "4",
          name: "Tailored Navy Blazer",
          price: "$340",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-beige-checkered-suit-posing-street-background_158538-2574.jpg",
        },
        {
          id: "5",
          name: "Designer Shades",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/glasses-with-slightly-rounded-frame_23-2150670720.jpg",
        },
        {
          id: "6",
          name: "Casual Comfort Hoodie",
          price: "$65",
          imageSrc: "http://img.b2bpic.net/free-photo/teenager-outside-enjoying-music-headphones-while-sitting-skateboard_23-2148758496.jpg",
        },
      ]}
      title="New Season Collections"
      description="Browse the latest styles from our featured clothing partners."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: ShoppingBag,
          title: "Products Listed",
          value: "50,000+",
        },
        {
          id: "m2",
          icon: Users,
          title: "Active Shoppers",
          value: "1.2M",
        },
        {
          id: "m3",
          icon: Building,
          title: "Brands Partnered",
          value: "850",
        },
      ]}
      title="Our Impact"
      description="The growth of our community speaks for itself."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Best marketplace",
          quote: "The easiest platform to list my brand collections.",
          name: "Alice M.",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-carrying-backpack-standing-near-wall-outdoors_23-2148221948.jpg",
        },
        {
          id: "2",
          title: "Luxury experience",
          quote: "Fantastic service and high-quality garments.",
          name: "John D.",
          role: "Buyer",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-mirror_1301-1468.jpg",
        },
        {
          id: "3",
          title: "Very reliable",
          quote: "Love the variety for my entire family.",
          name: "Maria K.",
          role: "Mom",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-lovable-woman-with-trench-coat_197531-19748.jpg",
        },
        {
          id: "4",
          title: "Kids love it",
          quote: "The only place I shop for kids fashion.",
          name: "Sara P.",
          role: "Mom",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-brunette-woman-white-t-shirt-pink-jacket-touches-her-hair-band-smiles-against-wall-cafe-terrace_197531-17037.jpg",
        },
        {
          id: "5",
          title: "Industry gold standard",
          quote: "Truly revolutionizing the fashion market.",
          name: "Peter R.",
          role: "Analyst",
          imageSrc: "http://img.b2bpic.net/free-photo/close-my-eyes-see-new-ideas-indoor-shot-happy-sewer-sitting-table-reading-magazine-drinking-tea-having-break-from-work-discussing-last-gossips-with-colleague-girl-sewing-machine_176420-14577.jpg",
        },
      ]}
      title="What People Say"
      description="Real feedback from our fashion community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do I become a seller?",
          content: "Just fill out the application form in the 'For Sellers' section.",
        },
        {
          id: "f2",
          title: "Can I return items?",
          content: "Yes, we offer hassle-free 30-day returns.",
        },
        {
          id: "f3",
          title: "Do you ship worldwide?",
          content: "Yes, we ship to over 100 countries globally.",
        },
      ]}
      title="Frequently Asked"
      description="Common questions about shopping or selling with us."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Join our Marketplace"
      description="Ready to list your brand or have a question? Contact us today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/brunette-gorgeous-girl-clothing-store-boutique-black-dress_627829-9092.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-choker-necklace_23-2149267426.jpg"
      logoText="MODA"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Men",
              href: "#",
            },
            {
              label: "Women",
              href: "#",
            },
            {
              label: "Kids",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Sell With Us",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
