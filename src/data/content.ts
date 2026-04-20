/**
 * All factual content drawn from the Flock Safety Camera
 * Opposition Report. Centralized for clarity and easy updates.
 */

export const HEADLINE_STATS = [
  { value: "80K", unit: "cameras", label: "Active Flock cameras nationwide" },
  { value: "20B", unit: "scans/mo", label: "License plates captured monthly" },
  { value: "30+", unit: "cities", label: "Contracts cancelled or paused" },
  { value: "$7.5B", unit: "valuation", label: "Surveillance empire under siege" },
];

export const REVELATIONS = [
  {
    no: "001",
    tag: "Reproductive Surveillance",
    variant: "hot" as const,
    title: "A Texas deputy queried 83,345 cameras for a woman's abortion.",
    body: [
      'On May 9, 2025, a Johnson County, TX deputy typed "had an abortion, search for female" into Flock — sweeping 6,809 networks and 83,345 cameras nationwide, including in Illinois and Washington where abortion is legal.',
      "Records obtained by EFF and 404 Media show it was a formal death investigation of a non-viable fetus. The DA advised the woman could not be statutorily charged. The Sheriff and Flock initially called it a 'welfare check.'",
    ],
    log: {
      query: "had an abortion, search for female",
      source: "Johnson County TX Sheriff's Office, May 9 2025",
      context: "Swept 6,809 networks / 83,345 cameras across the country.",
    },
  },
  {
    no: "002",
    tag: "Federal Back-Door",
    variant: "hot" as const,
    title: "CBP ran secret pilots on 10 Washington police departments.",
    body: [
      "The University of Washington Center for Human Rights' October 2025 report Leaving the Door Wide Open found CBP had quietly piloted access to ten Washington PDs from May to August 2025 — Black Diamond, Centralia, Chehalis, East Wenatchee, Eatonville, Ellensburg, Grandview, Mukilteo, Prosser, and Renton.",
      "Local police chiefs learned of the federal access only when UW researchers told them. CBP ran 118+ searches in a single month against 82,000+ devices. Flock CEO Garrett Langley later admitted to 'limited pilots' with CBP, HSI, NCIS, FBI, and the National Park Service.",
    ],
  },
  {
    no: "003",
    tag: "ICE Pipeline",
    variant: "amber" as const,
    title: "4,000+ ICE-labeled lookups, in one Illinois town's logs.",
    body: [
      "404 Media's May 2025 investigation of Danville, IL audit logs found over four thousand nation- and statewide Flock searches tied to immigration enforcement. The reasons typed by officers literally read 'ICE,' 'ICE+ERO,' 'ICE WARRANT,' 'HSI,' 'DHS,' 'CBP,' 'ICE FUGOPS,' and 'criminal alien.'",
      "Virginia's WHRO/VCIJ found ~4,000 immigration-related searches statewide, with more than half in Fairfax County. Richmond fired an ATF analyst after he used Flock to aid an immigration case.",
    ],
    log: {
      query: "ICE WARRANT",
      source: "Danville IL Police, 2024–2025 logs (404 Media)",
      context: "One of 4,000+ federal-immigration queries against the city's network.",
    },
  },
  {
    no: "004",
    tag: "Cross-State Sharing",
    variant: "default" as const,
    title: "1.6 million out-of-state searches of SFPD's database in 7 months.",
    body: [
      "California's Gibbs Mura + Milberg PLLC class action against Flock alleges cross-state sharing that allowed ICE, CBP, FBI, ATF, Air Force, USPS Inspection Service, and GSA Inspector General searches of California data — 1.6 million out-of-state searches of SFPD's database in seven months alone, plus 364,000 unauthorized searches of Ventura County's system.",
      "California's ALPR Privacy Act and Values Act prohibit local police from sharing ALPR data with federal or out-of-state agencies. AG Rob Bonta sued the city of El Cajon in October 2025 for refusing to comply.",
    ],
  },
  {
    no: "005",
    tag: "Officer Misconduct",
    variant: "default" as const,
    title: "Officers used Flock 164 times to track ex-partners.",
    body: [
      "Lt. Victor Heiar of Kechi, KS used Wichita PD's Flock 164+ times to track his estranged wife. He was arrested for stalking; sentenced to 18 months' probation. His search reasons — 'test,' 'invest,' '****' — never flagged.",
      "Sedgwick KS Police Chief Lee Nygaard used Flock 164 times to track his ex-girlfriend and 64 times to track her boyfriend. He resigned and permanently lost certification. Milwaukee Officer Josue Ayala was accused in 2025 of approximately 200 stalking-related Flock searches.",
    ],
  },
  {
    no: "006",
    tag: "Security Failure",
    variant: "amber" as const,
    title: "60+ Flock cameras livestreaming on the open internet, no password.",
    body: [
      "A December 2025 404 Media investigation found at least 60 Flock Condor PTZ admin panels accessible on the open internet via Shodan — no authentication required. Researcher Jon 'GainSec' Gaines lost his job within 48 hours of publishing.",
      "In November 2025, 404 Media found Flock customer credentials for sale on Russian cybercrime forums and in infostealer malware logs; 35+ customer accounts were compromised. Sen. Ron Wyden and Rep. Raja Krishnamoorthi asked the FTC to investigate.",
    ],
  },
  {
    no: "007",
    tag: "Wrongful Arrests",
    variant: "default" as const,
    title: "A misread '7' as '2' put a Black trucker on the ground with a K-9 on his arm.",
    body: [
      "Brandon Upchurch was pulled over in April 2024 after Flock misread '7' as '2' on his Dodge Ram. A K-9 latched onto his dreadlocks and bit his arm. Charges dismissed; settled October 2025 for $35,000. A federal judge reportedly quipped, 'Flock Flocked up.'",
      "In Española NM, 21-year-old Jaclynn Gonzales and her 12-year-old sister were held at gunpoint after Flock misread '2' as '7.' In Frisco TX, a Black family with two children was held at gunpoint at a youth basketball tournament when Flock misread Arkansas (AR) plates as Arizona (AZ). In Aurora CO, a mother and her 6-year-old daughter were forced face-down on hot pavement.",
    ],
  },
  {
    no: "008",
    tag: "Mission Creep",
    variant: "amber" as const,
    title: "Flock 'Nova' was designed to jump from license plate to person.",
    body: [
      "Internal documents leaked in May 2025 revealed Flock staff discussed using 2021 Park Mobile breach data to link plates to identities. A code analysis later reportedly found a 'DarkData' pipeline with selectors for SSNs, credit cards, crypto wallets, and Discord/Telegram handles — contradicting Flock's public denial.",
      "EFF's analysis of 12 million Flock searches (Dec 2024–Oct 2025) found 50+ agencies running searches tied to political protests (50501, Hands Off, No Kings). 80+ agencies were caught using slurs like 'roma traveler,' 'gypsy ruse,' or 'gypsy vehicle' as search reasons.",
    ],
  },
];

/* ========================================================== */

export const LAWSUITS = [
  {
    name: "Schmidt v. City of Norfolk",
    court: "E.D. Va., No. 2:24-cv-621",
    counsel: "Institute for Justice",
    status: "On appeal — 4th Circuit",
    summary:
      "The flagship Fourth Amendment case. Lee Schmidt (captured 475 times) and Crystal Arrington (325 times in four months) sued over Norfolk's 176-camera 'curtain of technology.' Survived motion to dismiss in Feb 2025 under Carpenter. In Jan 2026, Judge Davis granted summary judgment for the city — but warned that with denser networks 'the constitutional balancing could conceivably tip the other way.' IJ has appealed.",
  },
  {
    name: "Gibbs Mura + Milberg v. Flock Safety",
    court: "San Francisco Superior Court",
    counsel: "David Berger, Milberg PLLC",
    status: "Filed Feb 26, 2026 — amended Apr 3, 2026",
    summary:
      "First major class action directly against Flock. Alleges violation of California's ALPR Privacy Act through engineered cross-state sharing with ICE, CBP, FBI, ATF, Air Force, USPS, and GSA. Seeks $2,500+ per violation per class member (anyone whose plate was captured on or after Feb 26, 2022).",
  },
  {
    name: "Tan v. City of San Jose",
    court: "N.D. Cal.",
    counsel: "Institute for Justice",
    status: "Filed April 15, 2026",
    summary:
      "Federal class action challenging nearly 500 Flock cameras producing roughly 13,500 searches per day. Parallel to EFF/ACLU-NC's November 2025 California-Constitutional suit covering 3.96 million warrantless searches in a single year.",
  },
  {
    name: "California v. El Cajon",
    court: "California AG enforcement",
    counsel: "AG Rob Bonta",
    status: "Filed October 2025",
    summary:
      "First state AG-led enforcement action against a Flock customer city — for refusing to comply with California's ban on ALPR data sharing with federal and out-of-state agencies.",
  },
  {
    name: "Commonwealth v. Bell",
    court: "Norfolk Circuit Court",
    counsel: "—",
    status: "Decided June 2024",
    summary:
      "Judge Jamilah LeCruise suppressed Flock-derived evidence, calling Norfolk's network a warrantless 'dragnet over the entire city' analogous to United States v. Jones.",
  },
  {
    name: "Upchurch v. Toledo (OH)",
    court: "—",
    counsel: "Civil rights",
    status: "Settled $35K, October 2025",
    summary:
      "Black trucker pulled over after Flock misread '7' as '2'; K-9 attacked. The federal judge reportedly quipped, 'Flock Flocked up.'",
  },
];

export const STATUTES = [
  {
    state: "Washington",
    bill: "SB 6002 — Driver Privacy Act",
    year: "2026",
    note: "Called 'the strongest ALPR bill in the country.' 21-day deletion, felony/gross-misdemeanor use only, immigration enforcement banned, no cameras near schools or healthcare facilities, gross misdemeanor for violations.",
  },
  {
    state: "Virginia",
    bill: "HB 2724",
    year: "Eff. July 1, 2025",
    note: "21-day purge. Reasonable suspicion required. Sharing outside Virginia by warrant or court order only. Immigration enforcement prohibited. ALPR alert alone is not reasonable suspicion for a stop. Class 1 misdemeanor for violations.",
  },
  {
    state: "New Hampshire",
    bill: "RSA 236:130 / 261:75-b",
    year: "Existing",
    note: "The strictest in the country. Bans most highway surveillance. Records purged within 3 minutes if not linked to an active investigation. Effectively blocks general Flock deployment statewide.",
  },
  {
    state: "Illinois",
    bill: "ALPR Act + 2024 amendments",
    year: "2024",
    note: "Bans ALPR use for immigration-status investigations and out-of-state abortion investigations. Sec. of State Giannoulias' June 2025 audit found Flock broke this law by giving CBP undisclosed 'pilot' access.",
  },
  {
    state: "California",
    bill: "SB 34 + SB 54",
    year: "Existing + enforcement 2025",
    note: "Prohibits sharing of local ALPR data with federal or out-of-state agencies. CHP issued a Nov 2025 letter reaffirming contractual prohibitions. AG Bonta has sued El Cajon.",
  },
  {
    state: "Maine",
    bill: "25 MRSA §2117",
    year: "Existing",
    note: "Limits ALPR to specific public-safety agencies with a 21-day retention cap.",
  },
  {
    state: "Texas",
    bill: "TXDPS cease-and-desist",
    year: "July 2024",
    note: "Texas DPS told Flock it was operating as an unlicensed private-security business and would face criminal charges if it didn't stop.",
  },
];

/* ========================================================== */

export const CITIES_TERMINATED = [
  { city: "Austin", state: "TX", date: "Jun 2025", note: "First major city to cancel — 30+ community groups organized." },
  { city: "Oak Park", state: "IL", date: "Aug 2025", note: "Sanctuary-city ordinance concerns after immigration revelations." },
  { city: "Evanston", state: "IL", date: "Aug 2025", note: "Cease-and-desist Sept; Flock reinstalled cameras secretly. Final removal Mar 2026." },
  { city: "Sedona", state: "AZ", date: "Aug 2025", note: "'It was like we were building our own prisons.' — Sandy Boyce" },
  { city: "Paradise Valley", state: "AZ", date: "Sep 2025", note: "Cancelled after community pushback." },
  { city: "Cambridge", state: "MA", date: "Late 2025", note: "Terminated 'for cause' after Flock installed 2 unauthorized cameras." },
  { city: "Hays County", state: "TX", date: "Oct 2025", note: "Terminated." },
  { city: "Hillsborough", state: "NC", date: "Oct 2025", note: "Terminated." },
  { city: "Eugene", state: "OR", date: "Dec 2025", note: "Eyes Off Eugene campaign — Flock had reactivated a decommissioned camera." },
  { city: "Springfield", state: "OR", date: "Dec 2025", note: "Terminated alongside Eugene." },
  { city: "Talent", state: "OR", date: "Dec 2025", note: "Paused over sanctuary-law concerns." },
  { city: "Flagstaff", state: "AZ", date: "Dec 2025", note: "Unanimous council termination after month-long resident pushback." },
  { city: "Charlottesville", state: "VA", date: "Dec 2025", note: "10-camera pilot not renewed." },
  { city: "Staunton", state: "VA", date: "Dec 2025", note: "'Doesn't reflect the city's values.'" },
  { city: "Olympia", state: "WA", date: "Dec 2025", note: "15 cameras uninstalled after a 200-resident rally." },
  { city: "Redmond", state: "WA", date: "Nov 2025", note: "Deactivated after the Andrews wrongful-arrest case." },
  { city: "Mountlake Terrace", state: "WA", date: "Nov 2025", note: "Unanimously cancelled." },
  { city: "Bend", state: "OR", date: "Jan 2026", note: "Cameras removed over federal-compliance concerns." },
  { city: "Santa Cruz", state: "CA", date: "Jan 2026", note: "Terminated." },
  { city: "Mountain View", state: "CA", date: "Feb 2026", note: "Audit found ATF, Air Force, and GSA Inspector General accessed data without authorization." },
  { city: "Oxnard", state: "CA", date: "Feb 2026", note: "'Vendor-based issue' enabled nationwide query despite 'California only' setting." },
  { city: "Dunwoody", state: "GA", date: "Feb 2026", note: "Paused after a Flock VP ran 'unicycle' / 'rocket car' test searches on the live system." },
  { city: "Denver", state: "CO", date: "Feb 2026", note: "Replaced Flock with Axon — Denver data was searched 1,400+ times by ICE/proxies." },
  { city: "Seattle", state: "WA", date: "Early 2026", note: "Expansion frozen, 400 ALPRs shut down. Mayor ordered NYU audit." },
  { city: "Scarsdale", state: "NY", date: "—", note: "Contract killed with help from the Institute for Justice." },
  { city: "Verona", state: "WI", date: "—", note: "Triggered Dane County Board to end its contract." },
  { city: "Los Altos", state: "CA", date: "—", note: "Shut down after 1M+ out-of-state searches." },
  { city: "Richmond", state: "CA", date: "—", note: "Terminated." },
];

/* ========================================================== */

export const COALITION = [
  {
    name: "Electronic Frontier Foundation",
    short: "EFF",
    role: "National investigations + co-counsel in San Jose. Authors of the 12-million-search analysis, the Johnson County abortion exposé, and Atlas of Surveillance.",
    site: "eff.org",
  },
  {
    name: "Institute for Justice",
    short: "IJ — Plate Privacy Project",
    role: "Filed Schmidt v. Norfolk and Tan v. San Jose. Persuaded Greers Ferry, AR and Scarsdale, NY to retreat.",
    site: "plateprivacy.com",
  },
  {
    name: "ACLU (national + affiliates)",
    short: "ACLU",
    role: "Most active affiliates: Massachusetts, Iowa, Wisconsin, Washington, Colorado, Oregon, Northern California. Authors of the Pump-the-Brakes municipal playbook.",
    site: "aclu.org",
  },
  {
    name: "404 Media",
    short: "404",
    role: "The most consequential newsroom on Flock. Broke the abortion search, ICE pipeline, Nova leak, Condor camera exposure, and credentials-for-sale stories.",
    site: "404media.co",
  },
  {
    name: "DeFlock.me",
    short: "DeFlock",
    role: "Crowdsourced 76,000+ camera locations. Founded by Will Freeman, who survived Flock's trademark cease-and-desist with EFF representation.",
    site: "deflock.me",
  },
  {
    name: "HaveIBeenFlocked.com",
    short: "HIBF",
    role: "The de facto public archive of Flock audit logs — 2.3M+ plates and tens of millions of searches indexed from public records releases.",
    site: "haveibeenflocked.com",
  },
  {
    name: "UW Center for Human Rights",
    short: "UWCHR",
    role: "Authors of 'Leaving the Door Wide Open,' the academic report that exposed CBP's secret pilots into 10 Washington PDs.",
    site: "jsis.washington.edu/humanrights",
  },
  {
    name: "Fight for the Future",
    short: "FFTF",
    role: "Organized the rally at Flock HQ in Atlanta. Co-host of the 'Get the Flock Out of Our City' livestream.",
    site: "fightforthefuture.org",
  },
  {
    name: "Surveillance Tech Oversight Project",
    short: "S.T.O.P.",
    role: "Published 'Selling Surveillance' debunking Flock's San Marino crime-reduction claims.",
    site: "stopspying.org",
  },
];

/* ========================================================== */

export const ACTION_STEPS = [
  {
    no: "01",
    title: "Map the cameras near you.",
    body: "Use DeFlock.me's crowdsourced map of 76,000+ ALPR locations and EFF's Atlas of Surveillance. If your block isn't mapped, drop a pin.",
  },
  {
    no: "02",
    title: "FOIA your city's audit logs.",
    body: "Templates from the ACLU and EFF make it a fifteen-minute task. Search reasons, query counts, and federal access toggles are all discoverable. HaveIBeenFlocked.com publishes redaction-free archives.",
  },
  {
    no: "03",
    title: "Show up at the next council vote.",
    body: "Berkeley delayed its vote past 1 a.m. after enough residents testified. Olympia's contract died after a 200-person rally. Two minutes at a podium has cancelled contracts in 30+ cities.",
  },
  {
    no: "04",
    title: "Push your state legislature.",
    body: "WA SB 6002 and VA HB 2724 are working models. Demand: 21-day retention max, immigration-enforcement ban, no cameras near schools or clinics, criminal penalties for violations, and a private right of action.",
  },
  {
    no: "05",
    title: "Fund the litigation.",
    body: "The Institute for Justice's appeal in Schmidt is the case to watch. Milberg's California class action could reshape vendor liability nationwide. Both depend on donors and class members.",
  },
  {
    no: "06",
    title: "Join — or start — a local chapter.",
    body: "DeFlock chapters now exist in 15+ cities. Eyes Off Eugene-Springfield, the TRUST Coalition (San Diego), Birmingham's 400-signature petition campaign — every cancelled contract started with two or three people.",
  },
];
