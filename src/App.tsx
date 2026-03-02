import React from 'react';
import pavelNiImg from './assets/pavelni.png';
import seungchanLee from './assets/seungchanlee.png';
import jehyukJang from './assets/jehyukjang.png';
import jusungKang from './assets/jusungkang.jpg';
import zhengtongXu from './assets/zhengtongxu.jpg';
import alexanderSchmitz from './assets/alexanderschmitz.jpeg';
import yukiNoguchi from './assets/yukinoguchi.png';
import changjooNam from './assets/changjoonam.png';
import sharanNayak from './assets/sharannayak.png';

import placeholder from './assets/placeholder.jpg'
import rlwrldLogo from './assets/rlwrld.jpg';
import xelaLogo from './assets/xela-logo.jpg';
// import skt from './assets/skt.jpg';

const App: React.FC = () => {
  const topics = [
    "Multimodal representation learning for integrating vision, tactile, and proprioceptive sensing",
    "Reinforcement learning for high-dimensional control of multi-fingered hands",
    "Hierarchical and skill-based policy learning for complex manipulation tasks",
    "Sequential decision-making and long-horizon planning under contact dynamics",
    "Uncertainty modeling and risk-sensitive control for fragile object handling",
    "Generalization across object categories, tasks, and embodiments",
    "Sim-to-real transfer and domain adaptation for manipulation policies",
    "Data-efficient learning, offline reinforcement learning, and self-supervised learning for manipulation",
    "Learning-based modeling of contact dynamics and differentiable physics approaches",
    "Benchmarking, evaluation metrics, and reproducibility in dexterous manipulation research"
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header
        className="relative text-white py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/hero-seoul.jpg')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-bold uppercase tracking-wider mb-2">2026 ICML Workshop</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Multimodal Representation Learning for Dexterous Manipulation
          </h1>
          <p className="text-xl text-slate-200 italic mb-8 max-w-3xl mx-auto">
            (reinforcement learning: decision and control, planning, hierarchical RL, robotics)
          </p>
          <p className="text-xl text-slate-200 italic mb-8 max-w-3xl mx-auto">
            July 10th - COEX, Seoul, South Korea
          </p>
          <a
            href="https://dexterous-workshop.github.io"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg"
          >
            dexterous-workshop.github.io
          </a>
        </div>
      </header>

      {/* Participating Companies */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity">
            <img src={rlwrldLogo} alt="RL-World" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={xelaLogo} alt="Xela Robotics" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            {/* <img src={skt} alt="SKT" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" /> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Summary</h2>
          <p className="text-slate-700 leading-relaxed">
            This workshop focuses on the machine learning foundations of dexterous manipulation and embodied intelligence, with particular emphasis on reinforcement learning for decision-making, control, and hierarchical planning. Tasks such as fragile object handling, slip detection, and multi-object manipulation fundamentally require the integration of rich multimodal sensory signals—including tactile, proprioceptive, and visual inputs—with scalable representation learning and sequential decision-making algorithms.
          </p>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Description</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed">
            <p>
              Humanoid robots may represent a new paradigm for embodied computing. Instead of immersing ourselves in virtual environments through screens and networked devices, we may increasingly bring digital intelligence into the physical world through embodied agents. Rather than interacting with information via keyboards and displays, humans could collaborate directly with intelligent systems situated in shared environments—for example, preparing a meal together with a humanoid robot through natural dialogue and physical coordination.
            </p>
            <p>
              While this vision remains aspirational, recent advances in machine learning, embodied AI, and robotics are steadily bringing it closer to reality. In particular, progress in reinforcement learning, multimodal representation learning, and hierarchical decision-making has enabled more adaptive and generalizable control of high-degree-of-freedom systems. However, achieving robust, contact-rich interaction in unstructured environments remains a fundamental machine learning challenge. As a community of scientists, engineers, and researchers, we must accelerate advances in learning-based control, perception, planning, and human–robot interaction. This workshop brings together interdisciplinary perspectives to address the core ML problems underlying dexterous manipulation and embodied intelligence, with the goal of making such systems practical, reliable, and scalable.
            </p>
          </div>
        </section>

        {/* Message from Organizers */}
        <section className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            From the Organizers
          </h2>
          <div className="text-slate-700 space-y-4 leading-relaxed italic">
            <p>
              We invite contributions from researchers across academia, industry, and startups, and we encourage participation from individuals of all backgrounds, countries, and career stages. Our goal is to create a vibrant forum where diverse perspectives converge to accelerate the future of embodied intelligence.
            </p>
            <p>
              We are deeply committed to fostering diverse and inclusive discussions. Dexterous manipulation is a grand challenge that requires collaboration among a broad range of perspectives.
            </p>
          </div>
        </section>

        {/* Promising Topics */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Promising Topics</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>
              We invite submissions presenting novel research advances, empirical studies, theoretical insights, and benchmark contributions that address core machine learning challenges in dexterous manipulation and contact-rich embodied interaction.
            </p>
            <p>
              We welcome work from academia, industry, and startups that advances learning-centric approaches to high-dimensional control and multimodal decision-making. Topics of interest include, but are not limited to:
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </section>

        {/* Call for papers */}
        <section>
          <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2 mb-4">
            <h2 className="text-2xl font-bold">Call for Papers</h2>
            <button
              disabled
              title="Submissions open on March 20th"
              className="bg-slate-300 text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-not-allowed shadow-sm mb-1"
            >
              Submit
            </button>
          </div>
          <div className="text-slate-700 space-y-4 leading-relaxed">
            <p>
              We invite submissions of extended abstracts of up to 4 pages (excluding references) on topics related to multimodal representation learning, reinforcement learning, and dexterous manipulation.
              In addition to mature research contributions, we strongly encourage submissions describing preliminary results, negative results, position papers, benchmark proposals, system insights, and open challenges. Our goal is to foster thoughtful discussion and identify promising directions in embodied intelligence and contact-rich manipulation.
              Submissions may present work that is ongoing, recently published, or under review elsewhere. Accepted papers will be posted on the workshop website but will not be formally archived or published.
            </p>
            <p>
              A subset of accepted submissions will be selected for 15-minute contributed talks, and the remaining accepted papers will participate in a poster and demo session designed to promote active discussion and exchange across academia, startups, and industry.
              All submissions must follow the official ICML formatting guidelines. The review process will be double-blind, and authors should ensure that no identifying information is included in the manuscript.
              Authors may optionally submit supplementary materials (e.g., datasets, code, videos, demo previews, appendices).
            </p>
          </div>
        </section>

        {/* Important Information */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Important Information</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>The final dates and author instructions will be announced on March 20th.</p>
          </div>
          <table className="min-w-full divide-y divide-slate-200">
            <tbody className="bg-white divide-y divide-slate-200 text-sm">
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Paper Submissions Open</td>
                <td className="px-6 py-3 font-medium text-slate-900">March 20th</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Submission Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">April 24th</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Acceptance Notification</td>
                <td className="px-6 py-3 font-medium text-slate-900">May 15th</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Camera Ready Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Workshop Date:</td>
                <td className="px-6 py-3 font-medium text-slate-900">July 10 or 11th</td>
              </tr>
            </tbody>
          </table>
        </section>


        {/* Schedule */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Schedule</h2>
          <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <tbody className="bg-white divide-y divide-slate-200 text-sm">
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={3}>Opening</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">1</td>
                  <td className="px-6 py-3 text-slate-900 w-1/2 border-r border-slate-100">Invited Talk 1</td>
                  <td className="px-6 py-3 text-slate-900 w-1/2">Oral Presentations 1</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">2</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Invited Talk 2</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 2</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">3</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Invited Talk 3</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 3</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-900 font-medium bg-blue-50/30" colSpan={3}>Coffee Break – Job Fair 1</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">6</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 1</td>
                  <td className="px-6 py-3 text-slate-900">Panel Discussion 4</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">7</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 2</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 4</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">5</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 3</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 5</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={3}>Lunch – Job Fair 2</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">8</td>
                  <td className="px-6 py-3 text-slate-900" colSpan={2}>Poster Sessions</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={3}>Closing and Networking Party</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

                <section>
                  <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2 mb-8">
                    <h2 className="text-2xl font-bold">Speakers</h2>
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdD0QcQhnkvSv4wjp4P8El8bXxulrHFdlU9CUrqixH1GElx1w/viewform?usp=dialog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm mb-1"
                    >
                      Apply
                    </a>
                  </div>
        
                  <p className="mb-8 text-slate-600">The full list of Speakers, Panelists, Guests, and Sponsors will be announced soon.</p>
        
                  <div className="space-y-12">
                    {/* Speaker 1: Dr. Alexander Schmitz */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
                        <img src={alexanderSchmitz} alt="Dr. Alexander Schmitz" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Dr. Alexander Schmitz</h3>
                            <p className="text-slate-600 font-medium">XELA Robotics / Waseda University</p>
                          </div>
                          <a href='https://www.linkedin.com/in/schmitz-alexander/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-bold text-slate-800 italic text-lg">"Tactile Sensing for Adaptive Dexterous Manipulation"</h4>
                          <p className="mt-2 text-slate-700 leading-relaxed">
                            In this talk, we present how tactile sensing enables robust and adaptive dexterous manipulation in real-world environments. Fine manipulation tasks—such as in-hand reorientation, precision grasping, and deformable object handling—require continuous feedback at the point of contact. Vision alone is insufficient to capture micro-contact dynamics, slip events, and force distribution.
                          </p>
                        </div>
                      </div>
                    </div>
        
                    {/* Speaker 2: Zhengtong Xu */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
                        <img src={zhengtongXu} alt="Zhengtong Xu" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Zhengtong Xu</h3>
                            <p className="text-slate-600 font-medium">Purdue University</p>
                          </div>
                          <a href='https://www.linkedin.com/in/zhengtong-xu-4287b8174/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-bold text-slate-800 italic text-lg">"Multimodal Contact Grounding for Robot Dexterity"</h4>
                          <p className="mt-2 text-slate-700 leading-relaxed">
                            In this talk, I will present our recent works on leveraging vision and touch for robot perception and policy learning. Beyond vision and robot proprioception, we treat contact as a first-class state to describe and model the evolution of dexterous contact-rich manipulation. I will share practical takeaways and insights on contact modeling, and its impact on policy learning.
                          </p>
                        </div>
                      </div>
                    </div>
        
                    {/* Speaker 3: Yuki NOGUCHI */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
                        <img src={yukiNoguchi} alt="Yuki NOGUCHI" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Yuki NOGUCHI</h3>
                            <p className="text-slate-600 font-medium">Kawada Robotics Corporation</p>
                          </div>
                          <a href='https://www.linkedin.com/in/yuki-noguchi-4baa1032a/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-bold text-slate-800 italic text-lg">"Bridging Industrial Precision and Social Interaction: Lessons from NEXTAGE Deployment in a Robot Cafe."</h4>
                          <p className="mt-2 text-slate-700 leading-relaxed">
                            In this talk, I will share technical insights from developing the dual-arm robot "NEXTAGE" and its real-world application at "Robot Cafe Hare-to-Ke." I will discuss the challenges of transitioning from controlled industrial environments to unpredictable social settings, focusing on multimodal integration, safety, and the "dexterous" nuances required for human-robot collaboration.
                          </p>
                        </div>
                      </div>
                    </div>
        
                    {/* Speaker 4: Sharan Nayak */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
                        <img src={sharanNayak} alt="Sharan Nayak" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Sharan Nayak</h3>
                            <p className="text-slate-600 font-medium">Unewverse Inc. (Ooju)</p>
                          </div>
                          <a href='https://www.linkedin.com/in/sharan-nayak' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-bold text-slate-800 italic text-lg">"Training robots through human demonstrations using XR devices"</h4>
                          <p className="mt-2 text-slate-700 leading-relaxed">
                            In this talk, we present a scalable data infrastructure for embodied intelligence built on real-world interaction capture. We argue that generalization in robotics is fundamentally limited by insufficient diversity and structure in existing datasets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
                {/* Organizers */}        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Organizers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={pavelNiImg} alt="Pavel Ni" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Pavel Ni, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Gwangju Institute of Science and Technology</p>
              <p className="text-sm text-slate-500 mt-1">NextMetal</p>
              <a href='https://www.linkedin.com/in/pavel-ni/' target='_blank'>LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={seungchanLee} alt="Seungchan Lee" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Seungchan Lee, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Korea Institute of Machinery & Materials</p>
              <p className="text-sm text-slate-500 mt-1"> - </p>
              <a href='https://www.linkedin.com/in/lee-seungchan-9826bba7' target='_blank'>LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={placeholder} alt="placeholder" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">YoungHak Shin, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Mokpo National University</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.linkedin.com/in/younghak-shin-6b2542157/' target='_blank'>LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={jehyukJang} alt="Jehyuk Jang" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">Jehyuk Jang, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Tokamak Network</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.linkedin.com/in/jehyuk-jang/' target='_blank'>LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={jusungKang} alt="JuSung Kang" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">JuSung Kang, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">ETRI</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.linkedin.com/in/jusung-kang-41343467/' target='_blank'>LinkedIn</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Steering Committee</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8"> 

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={changjooNam} alt="Changjoo Nam" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Changjoo Nam, Professor</h3>
              <p className="text-sm text-slate-800 mt-1">Sogang University</p>
              <p className="text-sm text-slate-500 mt-1">AI Robotics Lab</p>
              <a href='https://sites.google.com/site/changjoonam/' target='_blank'>Website</a>
            </div>

          </div>
        </section>

        {/* Sponsors */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Sponsors</h2>
          <p className="text-slate-700 leading-relaxed">
            We are seeking sponsors to support paper awards, job fair, and the overall organization of the workshop. Your support will help us recognize outstanding research while ensuring a high-quality and inclusive event experience.
          </p>
        </section>

        {/* Inquiries */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">
            Inquiries
          </h2>

          <p className="text-slate-700 leading-relaxed">
            For any questions or inquiries, please contact the workshop organizers at:
          </p>

          <ul className="list-disc pl-6 mt-2 text-slate-700">
            <li>nipavels [at] gmail . com</li>
            <li>chans [at] kimm . re . kr</li>
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4 text-center text-slate-500 text-sm">
        &copy; 2026 ICML Workshop: Multimodal Representation Learning for Dexterous Manipulation
      </footer>
    </div>
  );
};

export default App;
