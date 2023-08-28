import Image from "next/image";
import {
  NoSymbolIcon,
  CheckCircleIcon,
  MoonIcon,
  BuildingOffice2Icon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Requires zero maintenance",
    description:
      "Leverage existing content to power your chatbot, and reduce the time your staff spend on chatbot upkeep.",
    icon: NoSymbolIcon,
  },
  {
    name: "Always up-to-date",
    description:
      "Automatically connect your content to your chatbot, meaning students always receive accurate responses.",
    icon: CheckCircleIcon,
  },
  {
    name: "Assists students 24/7",
    description:
      "With the majority of queries being handled out-of-hours, start your Monday morning with an empty inbox.",
    icon: MoonIcon,
  },
  {
    name: "Retains human oversight",
    description:
      "Review every message sent by your bot (in real time!), ensuring your team has full visibility of each conversation.",
    icon: MagnifyingGlassCircleIcon,
  },
];
const navigation = {
  main: [
    { name: "About", href: "https://www.geckoengage.com/about/" },
    { name: "Careers", href: "https://geckolabs.recruitee.com/" },
    { name: "Contact", href: "https://www.geckoengage.com/about/contact/" },
    {
      name: "Privacy Policy",
      href: "https://www.geckoengage.com/privacy-policy/",
    },
    { name: "Service Status", href: "http://status.geckoform.com/" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/geckoengage/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/geckoengage",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/geckoengage",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Instagram",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
};
const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    id: "brennagoyette",
    institution: "Universy of Glasgow",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "../images/glasgow_colour.png",
  },
};
const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          id: "lesliealexander",
          institution: "University of California - Irvine",
          imageUrl:
            "https://media.licdn.com/dms/image/C4E0BAQGzuO5pfplanQ/company-logo_200_200/0/1663661768903?e=1701302400&v=beta&t=iqyjPeCyZ5IVk6bWS4VRXkJxOkUWaxZpdQ22BEJmLyc",
        },
      },
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          id: "leonardkrasner",
          institution: "Santa Monica College",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          id: "lindsaywalton",
          institution: "University of Birmingham",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          id: "tomcook",
          institution: "Illinois Institute of Tech",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Michelle Jones",
          id: "michellejones",
          institution: "Goldsmiths University",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum excepturi rerum voluptatem minus harum..",
        author: {
          name: "Gary Smith",
          id: "garysmith",
          institution: "Arapahoe Community College",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];
const faqs = [
  {
    question: "How does this demo work?",
    answer:
      "Upon entering your email address, we'll identify your website domain and proceed to crawl your web pages. Then we mix in some Gecko secret sauce to create a ChatGPT-powered bot that's trained on your school's information, before using that data to answer your questions.",
  },
  {
    question:
      "How is this different to using ChatGPT directly? What magic does Gecko provide?",
    answer:
      "When used out the box, ChatGPT is only knowledgeable about events prior to September 2021, and it is prone to 'hallucinating' (i.e. making up answers). Gecko uses the best bits of ChatGPT, while constraining its knowledgebase to your school's data and adding a layer of control around the messages that are written for students. Finally, ChatGPT isn't the best tool for every scenario, so Gecko leverages additional AI partners for certain tasks where appropriate.",
  },
  {
    question: "Does this integrate with our existing systems?",
    answer:
      "ChatGPT may be the new kid on the block, but Gecko's AI chatbot has long been integrated with systems offered by Higher Ed's top vendors, such as Microsoft, Ellucian, Salesforce and Slate.",
  },
  {
    question: "Where can I learn more about Gecko's chatbot product?",
    answer:
      "Schedule a conversation with our team to learn more, or visit our website at geckoengage.com.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <main>
      <div class="flex  font-Macan relative">
        <div class="w-2/3 bg-white p-6">
          <header>
            <nav
              className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a
                  href="https://geckoengage.com"
                  target="_blank"
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">Gecko</span>
                  <img
                    className="h-8 w-auto"
                    src="https://uploads-ssl.webflow.com/647eb7d38084889ee9385946/647eb7d38084889ee9385965_Full-Word-Blue-Left.svg"
                    alt="Gecko logo"
                  />
                </a>
              </div>
              <div className="hidden lg:flex lg:gap-x-12"></div>
              <div className="flex flex-1 items-center justify-end gap-x-6">
                <a
                  href="https://account.geckoengage.com"
                  target="_blank"
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                >
                  Log-in
                </a>
                <a
                  href="#"
                  className="rounded-md bg-geckoBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-geckoSky hover:text-geckoBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-geckoBlue"
                >
                  Schedule an AI consultation
                </a>
              </div>
            </nav>
          </header>
          <div id="hero" className="py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h4 className="text-base font-semibold leading-7 text-geckoBlue uppercase">
                  Live Demo
                </h4>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Turn your institution's website into an AI chatbot in less
                  than 60 seconds
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Try our interactive demo and build a chatbot that's 100%
                  unique to your school
                </p>
              </div>

              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-geckoGreen">
                          <feature.icon
                            className="h-6 w-6 text-geckoBlue"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div id="cta">
            <div className="mx-auto max-w-7xl py-16 sm:pt-16 sm:pb-28 sm:px-6  lg:px-8">
              <div className="relative isolate overflow-hidden bg-geckoBlue px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <p className="text-lg  mb-2 font-semibold leading-8 text-geckoGreen">
                  Intrigued about how AI could help your school?
                </p>
                <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Schedule a personalized consultation today
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8  text-gray-200">
                  Book a 30-minute slot with our team. We’ll chat through your
                  current processes, show how our tech works, and help identify
                  your next steps.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-geckoBlue shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Schedule a consultation now
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-200 hover:text-white"
                  >
                    Send me more info <span aria-hidden="true">→</span>
                  </a>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                  aria-hidden="true"
                >
                  <circle
                    cx={512}
                    cy={512}
                    r={512}
                    // fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                    fill="#8de971"
                    // fillOpacity="0.7"
                  />
                  <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div id="logos" className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 saturate-0"
                src="https://uploads-ssl.webflow.com/646c5eda14230f767d1b11e9/649aed1f2aea2a0580aaf6cf_slate-logo-p-500.png"
                alt="Slate"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 saturate-0"
                src="https://uploads-ssl.webflow.com/646c5eda14230f767d1b11e9/649aed411d84631f84f74be0_microsoft-logo-p-800.webp"
                alt="Microsoft"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 saturate-0"
                src="https://uploads-ssl.webflow.com/646c5eda14230f767d1b11e9/649aed1edaee2852cc1515de_salesforce-logo-p-500.png"
                alt="Salesforce"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 saturate-0"
                // src="https://uploads-ssl.webflow.com/646c5eda14230f767d1b11e9/649aed1e555c5fb2237f2107_ellucian-logo.png"
                src="../images/ellucian_logo.png"
                alt="Ellucian"
                width={158}
                height={48}
              />
            </div>
          </div>
          <div
            id="testimonials"
            className="relative isolate pb-32 pt-24 sm:pt-32"
          >
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-2xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-geckoBlue to-geckoGreen"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-2xl sm:pt-40 xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-geckoBlue to-geckoGreen xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-geckoBlue ">
                  We work with the finest minds in HigherEd
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Here's what our partners had to say
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-geckoSky px-6 py-4">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src={featuredTestimonial.author.imageUrl}
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">
                        {featuredTestimonial.author.name}
                      </div>
                      <div className="text-geckoBlue">{`${featuredTestimonial.author.institution}`}</div>
                    </div>
                    <img
                      className="h-10 w-auto flex-none"
                      src={featuredTestimonial.author.logoUrl}
                      // src="../public/images/glasgow_colour.png"
                      alt=""
                    />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div
                    key={columnGroupIdx}
                    className="space-y-8 xl:contents xl:space-y-0"
                  >
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 &&
                              columnIdx === columnGroup.length - 1)
                            ? "xl:row-span-2"
                            : "xl:row-start-1",
                          "space-y-8"
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.id}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={testimonial.author.imageUrl}
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">
                                  {testimonial.author.name}
                                </div>
                                <div className="text-geckoBlue">{`${testimonial.author.institution}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="faqs">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-28">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                    Questions we're often asked
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Can’t find the answer you’re looking for? Schedule a demo,
                    or reach out to our{" "}
                    <a
                      href="https://www.geckoengage.com/about/contact/"
                      target="_blank"
                      className="font-semibold text-geckoBlue hover:underline"
                    >
                      Customer Success
                    </a>{" "}
                    team.
                  </p>
                </div>
                <div className="mt-10 lg:col-span-7 lg:mt-0">
                  <dl className="space-y-10">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <footer id="footer">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
              <nav
                className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                aria-label="Footer"
              >
                {navigation.main.map((item) => (
                  <div key={item.name} className="pb-6">
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>
              <div className="mt-10 flex justify-center space-x-10">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                &copy; 2023 Gecko. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
        <div id="demo" class="fixed right-0 bg-gray-200 h-screen w-1/3">
          {/* <div className=" relative mx-auto px-6 "> */}
          <div className=" absolute bottom-0 w-full mx-auto ">
            <div className="  w-11/12 mx-auto py-4 px-6 bg-slate-600 rounded-t-lg">
              <p className="text-white text-sm">
                This automated demo was created using 200+ pages from the
                ZZZ.ac.uk website. Schedule a demo to learn more about the
                advanced settings within the Gecko platform.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </main>
  );
}
