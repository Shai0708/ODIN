
import React from 'react';
import { SlideData } from './types';
import InteractiveDemo from './components/InteractiveDemo';
import ConceptualFramework from './components/ConceptualFramework';
import RADDiagram from './components/RADDiagram';
import { motion } from 'framer-motion';

export const slides: SlideData[] = [
  // CHAPTER I - PRESERVED EXACTLY AS IS
  {
    id: 1,
    title: "ODIN: Obstacle Detection and Intelligent Navigation Aid for Visually Impaired Individuals",
    chapter: "Title Slide",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center py-2">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="relative mb-6">
          <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[80px]"></div>
          <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter text-white relative leading-none">ODIN</h1>
        </motion.div>
        <div className="max-w-4xl space-y-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl md:text-3xl text-blue-400 font-black uppercase tracking-[0.4em]">Thesis Defense Presentation</motion.p>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full"></div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-lg md:text-2xl text-gray-200 font-bold leading-relaxed max-w-4xl mx-auto px-4">An Edge-AI Multi-Sensory Approach to Autonomous Pedestrian Navigation in Complex Urban Environments</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="pt-6 text-gray-500 text-xs md:text-sm font-black border-t border-gray-900 mt-4">
            Bachelor of Science in Computer Science <br/>
            Bicol University Polangui | Academic Year 2024-2025
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    chapter: "Chapter I",
    title: "Chapter I: The Problem and Its Background",
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <motion.h3 className="text-5xl md:text-7xl font-black text-blue-400 uppercase tracking-tight">Chapter I</motion.h3>
        <div className="w-1/4 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-4xl space-y-4">
          <p className="text-3xl md:text-5xl text-white font-black uppercase tracking-widest leading-tight">The Problem and Its <br/> Background</p>
          <div className="bg-blue-900/10 p-8 rounded-3xl border border-blue-500/20">
            <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">A Comprehensive Study on Legally Blind Navigation Challenges and Multi-Modal Solutions.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    chapter: "Chapter I",
    title: "Introduction: Global Context and Challenges",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="space-y-6 p-8 bg-gray-900/60 rounded-[35px] border border-gray-800 flex flex-col justify-center">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-medium">
            <span className="text-white font-black underline decoration-blue-500 decoration-4 underline-offset-8">Legally blind individuals</span> face extreme challenges in spatial orientation. Approximately <span className="text-blue-400 font-black">2.2 billion people</span> worldwide face visual impairment daily.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Traditional tools like the <span className="text-white font-bold">white cane</span> fail to identify overhead obstacles, leading to restricted mobility and accidents.
          </p>
        </div>
        <div className="p-10 bg-blue-950/20 rounded-[40px] border-l-[12px] border-blue-600 space-y-6">
          <h5 className="text-white font-black uppercase tracking-widest text-xl border-b border-blue-500/30 pb-2">Core Bottlenecks</h5>
          <ul className="space-y-4 text-gray-300 text-xl md:text-2xl font-bold">
             <li className="flex gap-4"><span className="text-blue-500 font-black">●</span> Head-level hazard detection gap.</li>
             <li className="flex gap-4"><span className="text-blue-500 font-black">●</span> Reduced autonomy in public zones.</li>
             <li className="flex gap-4"><span className="text-blue-500 font-black">●</span> Perception gap for dynamic objects.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 4,
    chapter: "Chapter I",
    title: "Introduction: The ODIN Solution Framework",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="space-y-6 p-8 bg-gray-900/60 rounded-[35px] border border-gray-800 flex flex-col justify-center">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
            The <span className="text-blue-400 font-bold text-3xl">ODIN system</span> fuses <span className="text-white">Artificial Intelligence</span> with multi-sensory hardware to identify static and dynamic hazards.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-cyan-300 font-black italic">
            "Providing high-level semantic context fused with precision acoustic ranging for safer navigation."
          </p>
        </div>
        <div className="p-10 bg-emerald-950/10 rounded-[40px] border-4 border-emerald-500/20 space-y-6">
          <h5 className="text-emerald-400 font-black uppercase tracking-widest text-xl border-b border-emerald-500/30 pb-2">Impact Summary</h5>
          <div className="space-y-5">
             <div className="p-5 bg-gray-900/80 rounded-2xl border border-gray-800">
                <span className="text-white font-black text-lg block mb-1">SDG 10: REDUCED INEQUALITIES</span>
                <p className="text-base text-gray-400 font-medium">Equal access to safe mobility and personal independence.</p>
             </div>
             <div className="p-5 bg-gray-900/80 rounded-2xl border border-gray-800">
                <span className="text-white font-black text-lg block mb-1">SDG 3: HEALTH & WELL-BEING</span>
                <p className="text-base text-gray-400 font-medium">Reducing risk of injury in complex urban environments.</p>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    chapter: "Chapter I",
    title: "Objectives of the Study: Core Aims",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="p-10 bg-blue-900/10 border-l-[15px] border-blue-600 rounded-r-[50px] shadow-2xl">
          <h5 className="text-xl md:text-2xl font-black text-white uppercase mb-4 underline decoration-blue-500 decoration-4 underline-offset-8">General Aim</h5>
          <p className="text-xl md:text-3xl text-blue-100 font-bold italic leading-relaxed">
            "To develop an intelligent aid that helps legally blind individuals navigate safely and independently."
          </p>
        </div>
        <div className="space-y-6">
           <div className="p-8 bg-gray-900/60 rounded-3xl border border-gray-800 shadow-xl">
              <span className="text-blue-500 font-black text-3xl block mb-2">01. Needs Analysis</span>
              <p className="text-lg md:text-xl text-gray-200 font-bold">Identifying specific navigation requirements in urban settings.</p>
           </div>
           <div className="p-8 bg-gray-900/60 rounded-3xl border border-gray-800 shadow-xl">
              <span className="text-blue-500 font-black text-3xl block mb-2">02. Design & Develop</span>
              <p className="text-lg md:text-xl text-gray-200 font-bold">Integrating CV algorithms and ultrasonic sensor fusion.</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    chapter: "Chapter I",
    title: "Objectives of the Study: Evaluation Metrics",
    content: (
      <div className="space-y-8 max-w-7xl mx-auto">
        <h5 className="text-blue-400 font-black uppercase text-sm md:text-base tracking-[0.4em] text-center mb-2 border-b-2 border-gray-800 pb-4">03. PERFORMANCE AND VALIDATION METRICS</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[35px] text-center flex flex-col justify-center">
              <h6 className="text-white font-black uppercase text-lg mb-4 border-b border-blue-500 pb-2">Functional Suitability</h6>
              <ul className="text-base md:text-lg text-gray-300 space-y-3 font-bold">
                 <li>Logic Completeness</li>
                 <li>Detection Correctness</li>
                 <li>Navigation Appropriateness</li>
              </ul>
           </div>
           <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[35px] text-center flex flex-col justify-center">
              <h6 className="text-white font-black uppercase text-lg mb-4 border-b border-cyan-500 pb-2">Performance Efficiency</h6>
              <ul className="text-base md:text-lg text-gray-300 space-y-3 font-bold">
                 <li>Low-Latency Processing</li>
                 <li>Resource Optimization</li>
                 <li>Operational Capacity</li>
              </ul>
           </div>
           <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[35px] text-center flex flex-col justify-center">
              <h6 className="text-white font-black uppercase text-lg mb-4 border-b border-emerald-500 pb-2">Reliability Profile</h6>
              <ul className="text-base md:text-lg text-gray-300 space-y-3 font-bold">
                 <li>System Maturity</li>
                 <li>Hardware Fault Tolerance</li>
                 <li>Quick Recoverability</li>
              </ul>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    chapter: "Chapter I",
    title: "Scope of the Study",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="p-10 bg-gray-900/60 border border-gray-800 rounded-[40px] space-y-8 flex flex-col justify-center">
          <h5 className="text-white font-black uppercase text-2xl border-b-4 border-blue-500 pb-2 inline-block">Functional Scope</h5>
          <ul className="text-xl md:text-2xl text-gray-300 space-y-5 font-bold">
             <li className="flex gap-4"><span className="text-blue-500 font-black">→</span> Real-time AI Hazard Scanning.</li>
             <li className="flex gap-4"><span className="text-blue-500 font-black">→</span> Bluetooth Sensor Integration.</li>
             <li className="flex gap-4"><span className="text-blue-500 font-black">→</span> Multi-modal User Feedback.</li>
             <li className="flex gap-4"><span className="text-blue-500 font-black">→</span> Terrain & Obstacle Mapping.</li>
          </ul>
        </div>
        <div className="p-10 bg-gray-900/60 border border-gray-800 rounded-[40px] flex flex-col justify-center space-y-8">
          <h5 className="text-white font-black uppercase text-2xl border-b-4 border-emerald-500 pb-2 inline-block">RAD Methodology</h5>
          <div className="grid grid-cols-2 gap-6">
             <div className="p-6 bg-gray-950/50 rounded-2xl border border-gray-800 text-center flex flex-col justify-center">
                <span className="text-emerald-500 font-black text-lg block">1. Planning</span>
                <p className="text-xs text-gray-600 uppercase mt-1">Requirements</p>
             </div>
             <div className="p-6 bg-gray-950/50 rounded-2xl border border-gray-800 text-center flex flex-col justify-center">
                <span className="text-emerald-500 font-black text-lg block">2. Design</span>
                <p className="text-xs text-gray-600 uppercase mt-1">Prototyping</p>
             </div>
             <div className="p-6 bg-gray-950/50 rounded-2xl border border-gray-800 text-center flex flex-col justify-center">
                <span className="text-emerald-500 font-black text-lg block">3. Build</span>
                <p className="text-xs text-gray-600 uppercase mt-1">Construction</p>
             </div>
             <div className="p-6 bg-gray-950/50 rounded-2xl border border-gray-800 text-center flex flex-col justify-center">
                <span className="text-emerald-500 font-black text-lg block">4. Cutover</span>
                <p className="text-xs text-gray-600 uppercase mt-1">Trial Testing</p>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    chapter: "Chapter I",
    title: "Limitations of the Study",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="p-10 bg-red-950/10 border-4 border-red-500/20 rounded-[45px] space-y-8 flex flex-col justify-center">
           <h6 className="text-red-400 font-black uppercase text-2xl border-b-2 border-red-500/30 pb-2">Technical Constraints</h6>
           <ul className="text-xl md:text-2xl text-gray-300 space-y-5 font-bold">
              <li><span className="text-red-500 font-black text-3xl">✕</span> Single Bluetooth pairing limit.</li>
              <li><span className="text-red-500 font-black text-3xl">✕</span> High NPU/GPU requirements.</li>
              <li><span className="text-red-500 font-black text-3xl">✕</span> Acoustic signal interference.</li>
           </ul>
        </div>
        <div className="p-10 bg-red-950/10 border-4 border-red-500/20 rounded-[45px] space-y-8 flex flex-col justify-center">
           <h6 className="text-red-400 font-black uppercase text-2xl border-b-2 border-red-500/30 pb-2">Environmental Limits</h6>
           <ul className="text-xl md:text-2xl text-gray-300 space-y-5 font-bold">
              <li><span className="text-red-500 font-black text-3xl">✕</span> Reduced efficiency in rain/snow.</li>
              <li><span className="text-red-500 font-black text-3xl">✕</span> Poor lighting impacts AI accuracy.</li>
              <li><span className="text-red-500 font-black text-3xl">✕</span> High environmental noise masking.</li>
           </ul>
        </div>
      </div>
    )
  },
  {
    id: 9,
    chapter: "Chapter I",
    title: "Significance: Primary Stakeholders",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="p-10 bg-gray-900 border-2 border-blue-500/30 rounded-[40px] space-y-6 flex flex-col justify-center shadow-2xl">
           <h5 className="text-blue-400 font-black uppercase text-2xl border-b-2 border-blue-500/20 pb-2">Legally Blind Users</h5>
           <p className="text-xl md:text-2xl text-gray-200 font-black leading-snug">Gain mobility independence, enhanced safety, and greater spatial confidence.</p>
           <p className="text-lg text-gray-400 font-bold">Reduces constant dependence on sighted human assistance during travel.</p>
        </div>
        <div className="p-10 bg-gray-900 border-2 border-cyan-500/30 rounded-[40px] space-y-6 flex flex-col justify-center shadow-2xl">
           <h5 className="text-cyan-400 font-black uppercase text-2xl border-b-2 border-cyan-500/20 pb-2">Families & Caregivers</h5>
           <p className="text-xl md:text-2xl text-gray-200 font-black leading-snug">Reduces the mental burden of constant supervision and monitoring.</p>
           <p className="text-lg text-gray-400 font-bold">Provides peace of mind through a reliable electronic safety safeguard.</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    chapter: "Chapter I",
    title: "Significance: Academic & Governance",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto text-center">
        <div className="p-8 bg-gray-900 border border-emerald-500/20 rounded-[35px] flex flex-col justify-center shadow-xl">
           <h5 className="text-emerald-400 font-black uppercase text-lg mb-4">Researchers</h5>
           <p className="text-lg text-gray-300 font-bold leading-relaxed">Provides empirical data on localized multi-modal sensor fusion strategies.</p>
        </div>
        <div className="p-8 bg-gray-900 border border-purple-500/20 rounded-[35px] flex flex-col justify-center shadow-xl">
           <h5 className="text-purple-400 font-black uppercase text-lg mb-4">Educational Inst.</h5>
           <p className="text-lg text-gray-300 font-bold leading-relaxed">Informs campus infrastructure policies for better PWD accessibility.</p>
        </div>
        <div className="p-8 bg-gray-900 border border-blue-500/20 rounded-[35px] flex flex-col justify-center shadow-xl">
           <h5 className="text-blue-400 font-black uppercase text-lg mb-4">Gov & Policy</h5>
           <p className="text-lg text-gray-300 font-bold leading-relaxed">Evidence-based data to guide accessibility standards and program funding.</p>
        </div>
      </div>
    )
  },

  // CHAPTER II - PRESERVED
  {
    id: 11,
    chapter: "Chapter II",
    title: "Chapter II: Review of Related Literature and Studies",
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10">
        <motion.h3 className="text-6xl md:text-8xl font-black text-blue-400 uppercase tracking-tight">Chapter II</motion.h3>
        <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-5xl space-y-6">
          <p className="text-3xl md:text-5xl text-white font-black uppercase tracking-widest leading-tight">REVIEW OF RELATED <br/> LITERATURE AND STUDIES</p>
          <div className="bg-blue-900/20 p-8 rounded-3xl border border-blue-500/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-bold">The development of assistive technologies for visually impaired individuals has evolved significantly through the integration of modern sensor technologies, artificial intelligence, and mobile computing platforms.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    chapter: "Chapter II",
    title: "Literature: Theoretical Foundations",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="space-y-6 p-8 bg-gray-900/60 rounded-[35px] border border-gray-800 flex flex-col justify-center h-full">
           <p className="text-xl md:text-2xl text-white font-bold italic leading-relaxed">
             "Activity Theory emphasizes the dynamic relationship between individuals, tools, and their environment (Cook & Polgar, 2015), while the ICF model demonstrates that navigation challenges arise from interactions between limitations and environmental barriers (WHO, 2019)."
           </p>
        </div>
        <div className="p-10 bg-blue-950/20 rounded-[40px] border-l-[12px] border-blue-600 space-y-6 h-full flex flex-col justify-center">
           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
             This comprehensive review examines the theoretical foundations, technological approaches, and current state-of-the-art solutions that inform the development of smartphone-based obstacle detection and navigation systems.
           </p>
           <p className="text-lg md:text-xl text-blue-400 font-black">
             Effective assistive technologies must transcend purely technical solutions to address holistic user needs.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 13,
    chapter: "Chapter II",
    title: "Literature: Sensor Fusion & Mobile Convergence",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="p-8 bg-gray-900/60 rounded-[35px] border border-gray-800 space-y-6 h-full flex flex-col justify-center">
           <h5 className="text-blue-400 font-black uppercase text-xl border-b border-blue-500/20 pb-2">Multi-Modal Evolution</h5>
           <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
             Modern systems employ diverse sensors, reflecting growing recognition that complex environments require complementary capabilities. Computer vision deep learning has advanced significantly, though limitations in poor lighting motivated ultrasonic sensing integration for reliable distance measurement.
           </p>
        </div>
        <div className="p-8 bg-gray-900/60 rounded-[35px] border border-gray-800 space-y-6 h-full flex flex-col justify-center">
           <h5 className="text-emerald-400 font-black uppercase text-xl border-b border-emerald-500/20 pb-2">Smartphone Opportunity</h5>
           <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
             The proliferation of smartphones integrates multiple sensors and processing capabilities within accessible devices. However, mobile implementation presents challenges including processing limitations, battery life, and the need for robust communication protocols.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 14,
    chapter: "Chapter II",
    title: "Literature: Feedback & User-Centered Design",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="p-8 bg-blue-900/10 rounded-[35px] border-l-[10px] border-blue-500 space-y-6">
           <h5 className="text-white font-black uppercase text-xl">Feedback Mechanisms</h5>
           <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
             Audio feedback via TTS and spatial cues remains predominant, while haptic vibration offers complementary information delivery that does not interfere with environmental audio cues (Bhatlawande et al., 2022).
           </p>
        </div>
        <div className="p-8 bg-emerald-900/10 rounded-[35px] border-l-[10px] border-emerald-500 space-y-6">
           <h5 className="text-white font-black uppercase text-xl">Successful Adoption</h5>
           <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
             Critical factors include perceived usefulness, ease of use, reliability, and social acceptability. Contemporary research emphasizes principles recognizing that technical performance alone does not guarantee successful adoption.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 15,
    chapter: "Chapter II",
    title: "Studies: AI and Computer Vision Optimization",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
         <div className="p-6 bg-gray-900 border-2 border-blue-500/20 rounded-[30px] shadow-xl">
            <h5 className="text-blue-400 font-black uppercase text-sm mb-3">Rashid et al. (2022)</h5>
            <p className="text-base text-gray-200 font-bold mb-2">DeepNAVI Assistant</p>
            <p className="text-sm text-gray-400">Achieved 89.7% accuracy in obstacle detection across diverse environments through model optimization, though battery limited operation to 3-4 hours.</p>
         </div>
         <div className="p-6 bg-gray-900 border-2 border-cyan-500/20 rounded-[30px] shadow-xl">
            <h5 className="text-cyan-400 font-black uppercase text-sm mb-3">Mahmud et al. (2023)</h5>
            <p className="text-base text-gray-200 font-bold mb-2">YOLOv5 Architecture</p>
            <p className="text-sm text-gray-400">Achieved 15-20 frames per second on smartphone hardware with a custom dataset of 50,000 images, resulting in 92.3% detection and 87.6% classification accuracy.</p>
         </div>
         <div className="p-6 bg-gray-900 border-2 border-emerald-500/20 rounded-[30px] shadow-xl">
            <h5 className="text-emerald-400 font-black uppercase text-sm mb-3">Wang et al. (2019)</h5>
            <p className="text-base text-gray-200 font-bold mb-2">Vision-Based Mobile</p>
            <p className="text-sm text-gray-400">Demonstrated 67% fewer errors and 43% reduced time compared to canes. Enabled real-time path planning, improving user confidence despite poor lighting.</p>
         </div>
      </div>
    )
  },
  {
    id: 16,
    chapter: "Chapter II",
    title: "Studies: Ultrasonic Ranging & Sensor Fusion",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
         <div className="p-6 bg-gray-900 border border-blue-500/20 rounded-[30px] shadow-xl">
            <h5 className="text-blue-400 font-black uppercase text-sm mb-3">Papadopoulos (2022)</h5>
            <p className="text-base text-gray-200 font-bold mb-2">HC-SR04 Recognition</p>
            <p className="text-sm text-gray-400">Testing of 12 participants demonstrated 94.1% accuracy in obstacle detection within 4-meter range and false positive rates below 3.2%.</p>
         </div>
         <div className="p-6 bg-gray-900 border border-purple-500/20 rounded-[30px] shadow-xl">
            <h5 className="text-purple-400 font-black uppercase text-sm mb-3">Kumar et al. (2018)</h5>
            <p className="text-base text-gray-200 font-bold mb-2">Wearable Configurations</p>
            <p className="text-sm text-gray-400">Head-mounted configurations provided superior performance for overhead detection, though acceptance revealed preferences for less conspicuous mounting.</p>
         </div>
         <div className="p-6 bg-gray-900 border-4 border-emerald-500/30 rounded-[30px] shadow-xl">
            <h5 className="text-emerald-400 font-black uppercase text-sm mb-3">Kalantri et al. (2025)</h5>
            <p className="text-base text-gray-200 font-black mb-2">Fusion Breakthrough</p>
            <p className="text-sm text-gray-400">Demonstrated 96.2% obstacle detection accuracy by dynamically weighting camera and ultrasonic contributions based on environmental conditions.</p>
         </div>
      </div>
    )
  },
  {
    id: 17,
    chapter: "Chapter II",
    title: "Conceptual Framework: Context and Approach",
    content: (
      <div className="space-y-8 max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="p-10 bg-gray-900/60 border-l-[15px] border-blue-600 rounded-r-[50px] shadow-2xl">
           <p className="text-xl md:text-3xl text-white font-bold leading-relaxed">
             "The conceptual framework for the proposed system integrates established theoretical foundations from assistive technology research, human-computer interaction principles, and sensor fusion methodologies."
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 bg-gray-900 border border-gray-800 rounded-[35px] text-center">
              <h6 className="text-blue-400 font-black uppercase text-sm mb-2">Activity Theory</h6>
              <p className="text-sm text-gray-400 font-bold leading-relaxed">Understand how tools mediate human activities dynamically with environment.</p>
           </div>
           <div className="p-8 bg-gray-900 border border-gray-800 rounded-[35px] text-center">
              <h6 className="text-cyan-400 font-black uppercase text-sm mb-2">Info Processing</h6>
              <p className="text-sm text-gray-400 font-bold leading-relaxed">How users receive, process, and act upon system feedback information.</p>
           </div>
           <div className="p-8 bg-gray-900 border border-gray-800 rounded-[35px] text-center">
              <h6 className="text-emerald-400 font-black uppercase text-sm mb-2">TAM Model</h6>
              <p className="text-sm text-gray-400 font-bold leading-relaxed">Factors that influence user acceptance and adoption of navigation technologies.</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    chapter: "Chapter II",
    title: "Conceptual Framework: IPO Model",
    content: (
      <div className="h-full w-full py-2">
        <ConceptualFramework />
      </div>
    )
  },
  {
    id: 19,
    chapter: "Chapter II",
    title: "Definition of Terms (Set 1)",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-center h-full">
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-blue-400 font-black uppercase text-xs mb-2 tracking-widest">Assistive Technology</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Any equipment used to improve functional capabilities. Specifically navigation aids designed for visually impaired persons implemented through ODIN.
          </p>
        </div>
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-cyan-400 font-black uppercase text-xs mb-2 tracking-widest">Computer Vision</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            AI that trains computers to interpret visual info. Image processing algorithms enabling ODIN to identify and classify obstacles.
          </p>
        </div>
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-emerald-400 font-black uppercase text-xs mb-2 tracking-widest">Deep Learning</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Subset of ML using neural networks to model complex patterns. Neural network models like YOLOv5 achieving 89.7-92.3% accuracy in ODIN.
          </p>
        </div>
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-purple-400 font-black uppercase text-xs mb-2 tracking-widest">Multi-Modal Feedback</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Systems providing info through multiple sensory channels. Combination of audio (TTS) and haptic (vibration) outputs used in the system.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 20,
    chapter: "Chapter II",
    title: "Definition of Terms (Set 2)",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-center h-full">
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-blue-400 font-black uppercase text-xs mb-2 tracking-widest">Navigation Assistance</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Support designed to help move safely and independently. Directional guidance and obstacle warnings provided to help ODIN users move safely.
          </p>
        </div>
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-cyan-400 font-black uppercase text-xs mb-2 tracking-widest">Obstacle Detection</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Identifying physical barriers or hazards. Identification within a 4-meter range using combined vision and ultrasonic tech (94.1-96.2% accuracy).
          </p>
        </div>
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-emerald-400 font-black uppercase text-xs mb-2 tracking-widest">Sensor Fusion</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Combining sensory data to produce reliable info. Integration of camera and HC-SR04 readings with dynamic weighting algorithms.
          </p>
        </div>
        <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-[30px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-purple-400 font-black uppercase text-xs mb-2 tracking-widest">Smartphone-Based Platform</span>
          <p className="text-lg md:text-xl text-gray-200 font-bold leading-snug">
            <span className="text-xs opacity-50 block uppercase mb-1 font-mono tracking-tighter">Conceptual/Operational</span>
            Devices combining sensors and processing. Android/iOS mobile devices used as primary hardware integrating all ODIN sensor nodes.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 21,
    chapter: "Chapter II",
    title: "Definition of Terms (Set 3)",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-center h-full">
        <div className="p-10 bg-gray-900 border-2 border-gray-800 rounded-[40px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-blue-400 font-black uppercase text-xs mb-2 tracking-widest">Ultrasonic Sensors</span>
          <p className="text-2xl md:text-3xl text-gray-200 font-bold leading-tight">
            <span className="text-xs opacity-50 block uppercase mb-3 font-mono tracking-widest">Conceptual/Operational</span>
            Devices using high-frequency sound waves to measure distances. HC-SR04 sensors measuring 4-meter ranges specifically for transparent objects.
          </p>
        </div>
        <div className="p-10 bg-gray-900 border-2 border-gray-800 rounded-[40px] flex flex-col justify-center shadow-lg h-full">
          <span className="text-emerald-400 font-black uppercase text-xs mb-2 tracking-widest">Visually Impaired</span>
          <p className="text-2xl md:text-3xl text-gray-200 font-bold leading-tight">
            <span className="text-xs opacity-50 block uppercase mb-3 font-mono tracking-widest">Conceptual/Operational</span>
            Individuals with partial or complete vision loss. Study participants who are blind or have low vision, representing the target user population.
          </p>
        </div>
      </div>
    )
  },

  // CHAPTER III - OVERHAULED VERBATIM
  {
    id: 22,
    chapter: "Chapter III",
    title: "Chapter III: Research Design and Methodology",
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10">
        <motion.h3 className="text-6xl md:text-8xl font-black text-blue-400 uppercase tracking-tight">Chapter III</motion.h3>
        <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-5xl space-y-6">
          <p className="text-3xl md:text-5xl text-white font-black uppercase tracking-widest leading-tight">RESEARCH DESIGN AND <br/> METHODOLOGY</p>
          <div className="bg-blue-900/20 p-8 rounded-3xl border border-blue-500/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-bold">The development and evaluation of assistive navigation technologies for visually impaired individuals requires rigorous research methodologies that combine technical performance assessment with comprehensive user experience evaluation.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 23,
    chapter: "Chapter III",
    title: "Research Method & Design",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto h-full py-4">
        <div className="p-10 bg-gray-900/60 border-l-[12px] border-blue-600 rounded-r-[40px] shadow-2xl space-y-4 h-full flex flex-col justify-center">
           <h5 className="text-white font-black uppercase text-2xl tracking-tight">Combined Approach</h5>
           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
             This study employs a descriptive and developmental research design to comprehensively evaluate the effectiveness, usability, and user acceptance of the ODIN system.
           </p>
        </div>
        <div className="p-10 bg-blue-900/10 rounded-[40px] border border-blue-500/20 space-y-6 h-full flex flex-col justify-center">
           <p className="text-lg md:text-2xl text-gray-200 font-bold italic leading-relaxed">
             "The descriptive component systematically documents and analyzes the navigation challenges faced by legally blind individuals, while the developmental aspect focuses on the iterative design, implementation, and refinement of the ODIN system based on user needs and feedback (Kumar, 2020)."
           </p>
        </div>
      </div>
    )
  },
  {
    id: 24,
    chapter: "Chapter III",
    title: "Sources of Data",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto h-full py-6">
        <div className="p-10 bg-gray-900/60 border-2 border-blue-500/20 rounded-[45px] space-y-5 h-full flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-blue-400 font-black uppercase text-2xl border-b border-blue-500/20 pb-3 flex-none tracking-widest">Primary Sources</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Includes surveys and feedback from legally blind participants regarding navigation experiences and usability, experimental testing data from controlled tasks, user performance measurements, and qualitative insights from semi-structured interviews.
           </p>
        </div>
        <div className="p-10 bg-gray-900/60 border-2 border-emerald-500/20 rounded-[45px] space-y-5 h-full flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-emerald-400 font-black uppercase text-2xl border-b border-emerald-500/20 pb-3 flex-none tracking-widest">Secondary Sources</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Comprehensive literature reviews including Mahmud et al. (2023), Rahman et al. (2024), and Kalantri et al. (2025). Technical documentation from hardware/software specifications and established accessibility guidelines inform system design.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 25,
    chapter: "Chapter III",
    title: "Data Gathering Procedure: Sequential Stages",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-full py-2">
        {[
          { s: "1", t: "Recruitment", d: "Identifying legally blind individuals meeting criteria." },
          { s: "2", t: "Baseline", d: "Documenting current navigation and aid usage." },
          { s: "3", t: "Training", d: "Instructional sessions with the ODIN system." },
          { s: "4", t: "Controlled", d: "Standardized environment performance testing." },
          { s: "5", t: "Field Testing", d: "Natural environment supervised navigation." },
          { s: "6", t: "Surveys", d: "Post-testing quantitative feedback collection." },
          { s: "7", t: "Interviews", d: "In-depth qualitative semi-structured sessions." },
          { s: "8", t: "Analysis", d: "Consolidated system performance data analysis." }
        ].map((step, i) => (
          <div key={i} className="p-4 bg-gray-900/80 border border-gray-800 rounded-3xl flex flex-col items-center text-center shadow-lg justify-center overflow-hidden">
             <span className="text-3xl md:text-5xl font-black text-blue-500/20 mb-2 leading-none">{step.s}</span>
             <h6 className="text-white font-black uppercase text-xs md:text-sm mb-1 tracking-wider">{step.t}</h6>
             <p className="text-[10px] md:text-[11px] text-gray-400 font-bold leading-tight">{step.d}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 26,
    chapter: "Chapter III",
    title: "Data Gathering: Evaluation Protocols",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto h-full py-4">
        <div className="p-10 bg-gray-900/60 rounded-[40px] border border-gray-800 space-y-6 h-full flex flex-col justify-center">
           <h5 className="text-blue-400 font-black uppercase text-2xl tracking-widest">Testing Environments</h5>
           <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
             Controlled testing is conducted in standardized environments to evaluate performance under consistent conditions. Field testing extends this to actual navigation scenarios under supervised conditions.
           </p>
        </div>
        <div className="p-10 bg-gray-900/60 rounded-[40px] border border-gray-800 space-y-6 h-full flex flex-col justify-center">
           <h5 className="text-emerald-400 font-black uppercase text-2xl tracking-widest">UX Evaluation</h5>
           <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
             Captures both quantitative and qualitative feedback through usability questionnaires and observational studies. Throughout all phases, safety protocols and ethical guidelines are strictly maintained.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 27,
    chapter: "Chapter III",
    title: "Research Methodology: RAD Framework",
    content: (
      <div className="space-y-8 max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="p-10 bg-gray-900/60 border-l-[15px] border-[#D14D96] rounded-r-[50px] shadow-2xl">
           <p className="text-lg md:text-2xl text-white font-bold leading-relaxed">
             "The study adopts the Rapid Application Development (RAD) methodology, emphasizing iterative development cycles, user involvement, and rapid prototyping (Dennis et al., 2015)."
           </p>
        </div>
        <div className="p-8 bg-gray-900 border border-gray-800 rounded-[40px] text-center">
           <p className="text-base md:text-lg text-gray-400 font-bold leading-relaxed italic">
             This approach is particularly suitable for assistive technology as it enables continuous user feedback integration and iterative refinement based on user needs and preferences.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 28,
    chapter: "Chapter III",
    title: "Methodology: The RAD Lifecycle",
    content: (
      <div className="h-full w-full py-2">
        <RADDiagram />
      </div>
    )
  },
  {
    id: 29,
    chapter: "Chapter III",
    title: "Evaluation Procedure: Assessment Criteria",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-full items-center py-6">
        <div className="p-8 bg-gray-900/60 border-2 border-blue-500/20 rounded-[40px] space-y-4 h-full flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-blue-400 font-black uppercase text-xl leading-tight border-b border-blue-500/10 pb-2">Functional Suitability</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Evaluated through controlled scenarios. Researchers document function completeness, measure detection correctness, and compare navigation appropriateness.
           </p>
        </div>
        <div className="p-8 bg-gray-900/60 border-2 border-cyan-500/20 rounded-[40px] space-y-4 h-full flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-cyan-400 font-black uppercase text-xl leading-tight border-b border-cyan-500/10 pb-2">Performance Efficiency</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Evaluated by recording system response times, monitoring battery consumption, and tracking memory/CPU usage during real-time processing tasks.
           </p>
        </div>
        <div className="p-8 bg-gray-900/60 border-2 border-emerald-500/20 rounded-[40px] space-y-4 h-full flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-emerald-400 font-black uppercase text-xl leading-tight border-b border-emerald-500/10 pb-2">Reliability Profile</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Assessed through documentation of failures (maturity), operational uptime (availability), and conduct of stress tests (fault tolerance/recoverability).
           </p>
        </div>
      </div>
    )
  },
  {
    id: 30,
    chapter: "Chapter III",
    title: "Evaluation: Statistical Analysis",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="p-8 bg-gray-900 border border-gray-800 rounded-[40px] space-y-4 shadow-2xl">
           <h5 className="text-white font-black uppercase text-xl border-b border-white/10 pb-2">Measurement Scale</h5>
           <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
             Participants evaluate system characteristics using a structured 5-point Likert scale (Bhandari & Nikolopoulou, 2023).
           </p>
           <div className="bg-blue-900/10 p-4 rounded-xl border border-blue-500/20">
              <div className="flex justify-between text-xs md:text-sm text-blue-400 font-black mb-1"><span>4.21 - 5.00</span> <span>Strongly Agree</span></div>
              <div className="flex justify-between text-xs md:text-sm text-gray-200 font-bold mb-1"><span>3.41 - 4.20</span> <span>Agree</span></div>
              <div className="flex justify-between text-xs md:text-sm text-gray-400 font-bold"><span>2.61 - 3.40</span> <span>Neutral</span></div>
           </div>
        </div>
        <div className="p-10 bg-blue-950/20 rounded-[45px] border border-blue-500/30 flex flex-col items-center justify-center text-center">
           <h5 className="text-white font-black uppercase text-2xl mb-4">Weighted Mean</h5>
           <div className="bg-black/50 p-6 rounded-3xl border border-white/10 mb-6">
              <span className="text-3xl md:text-4xl font-serif italic text-white">W = Σ(f · w) / n</span>
           </div>
           <p className="text-xs text-gray-500 leading-relaxed italic max-w-xs">
             Comprehensive measure of central tendency accounting for relative importance of categories (Babbie, 2021).
           </p>
        </div>
      </div>
    )
  },
  {
    id: 31,
    chapter: "Chapter III",
    title: "System Requirements: Hardware & Software",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto h-full py-6">
        <div className="p-10 bg-gray-900/60 border-2 border-blue-500/20 rounded-[45px] space-y-6 flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-blue-400 font-black uppercase text-2xl border-b border-blue-500/20 pb-2 tracking-widest">Hardware Specs</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Emphasize core elements including quad-core 1.8 GHz ARM processors, 4GB RAM, and 8MP autofocus cameras. External sensors consist of HC-SR04 ultrasonic nodes and Arduino Nano microcontrollers.
           </p>
        </div>
        <div className="p-10 bg-gray-900/60 border-2 border-emerald-500/20 rounded-[45px] space-y-6 flex flex-col justify-center overflow-hidden shadow-2xl">
           <h5 className="text-emerald-400 font-black uppercase text-2xl border-b border-emerald-500/20 pb-2 tracking-widest">Software Stack</h5>
           <p className="text-base md:text-lg text-gray-200 leading-relaxed font-bold">
             Utilizes React Native or Flutter frameworks. AI components utilize TensorFlow Lite or PyTorch Mobile for on-device inference (YOLOv5 models). Integration via platform-specific Bluetooth APIs.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 32,
    chapter: "Chapter III",
    title: "Table 2. Comprehensive System Requirements",
    content: (
      <div className="w-full max-h-[82vh] overflow-y-auto custom-scrollbar pr-4">
        <table className="w-full text-left border-collapse border border-gray-800 bg-gray-900/80 rounded-2xl overflow-hidden shadow-2xl">
          <thead className="bg-blue-900/40 text-blue-300 uppercase text-[10px] md:text-xs font-black tracking-widest">
            <tr>
              <th className="p-3 border border-gray-800">Component</th>
              <th className="p-3 border border-gray-800">Hardware Requirement</th>
              <th className="p-3 border border-gray-800">Software Requirement</th>
            </tr>
          </thead>
          <tbody className="text-[10px] md:text-[11px] text-gray-300">
            {[
              ["OS", "Device platform compatibility", "Android 8.0+ / iOS 12.0+"],
              ["CPU", "Quad-core 1.8 GHz ARM", "Real-time CV support"],
              ["Memory", "4GB RAM, 32GB Storage", "Data processing optimization"],
              ["Camera", "Rear-facing, 8MP, 1080p", "Object detection models"],
              ["Connect", "Bluetooth 4.0+", "Platform Bluetooth APIs"],
              ["Sensors", "Built-in Accel/Gyro/Mag", "Motion tracking algorithms"],
              ["Audio", "Built-in speakers / jack", "TTS / haptic feedback APIs"],
              ["Battery", "Min 3000mAh capacity", "Power management optimization"],
              ["External", "HC-SR04, Arduino Nano", "Sensor fusion algorithms"],
              ["AI", "On-device processing", "TensorFlow Lite / PyTorch"]
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white/5 border-b border-gray-800/40 transition-colors">
                <td className="p-2 font-black text-white bg-blue-900/5 whitespace-nowrap">{row[0]}</td>
                <td className="p-2 leading-tight">{row[1]}</td>
                <td className="p-2 italic text-blue-400/80 leading-tight">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },

  // FINAL SECTIONS - PRESERVED
  {
    id: 33,
    chapter: "Simulation",
    title: "Simulation: Active Scanning",
    type: 'interactive',
    content: (
      <div className="h-full w-full py-2">
        <InteractiveDemo />
      </div>
    )
  },
  {
    id: 34,
    chapter: "Closing",
    title: "Thesis Defense 2024: Q&A",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="relative">
           <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px]"></div>
           <h3 className="text-7xl md:text-9xl lg:text-[11rem] font-black text-white relative tracking-tighter uppercase leading-none">Thank You</h3>
        </motion.div>
        <div className="space-y-6 opacity-80">
          
          <div className="h-2 w-64 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg md:text-2xl text-blue-500 font-mono tracking-widest uppercase font-black">ODIN Research Team | Bicol University Polangui</p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 2 }} className="flex gap-12 pt-12 border-t border-gray-900 w-full justify-center">
           <div className="text-sm font-mono text-gray-600 uppercase font-black">ID: 2025-ODIN-TECH-DEFENSE</div>
           <div className="text-sm font-mono text-gray-600 uppercase font-black">BSCS-POLANGUI-ACAD</div>
           <div className="text-sm font-mono text-gray-600 uppercase font-black">© 2025 ALL RIGHTS RESERVED</div>
        </motion.div>
      </div>
    )
  }
];
