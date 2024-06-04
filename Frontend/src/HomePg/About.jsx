import React from 'react';
import './About.css'
import SliderScroll from '../Components/SliderS/Slider';
import { motion } from 'framer-motion';
const About = () => {
  return (
   <section className="About relative mt-14">

     <div className="container mx-auto px-4 py-8 z-0">
      <h2 className="text-3xl font-bold mb-4 text-green-400">Traditional Lifestyle:</h2>
      <p className="mb-4">
        Japan's lifestyle is deeply rooted in tradition, with customs and practices that have been passed down for generations. Traditional Japanese lifestyle emphasizes harmony, respect, and simplicity.
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li><strong>Tea Ceremony (茶道, Sadō or Chadō):</strong> The tea ceremony is a traditional Japanese ritual that involves the preparation and serving of matcha, a powdered green tea. It's not just about drinking tea but also about aesthetics, etiquette, and spirituality.</li>
        <li><strong>Ikebana (生け花):</strong> Ikebana is the Japanese art of flower arranging. It's more than just putting flowers in a vase; it's about creating a harmonious balance between nature and human creativity.</li>
        <li><strong>Zen Buddhism (禅):</strong> Zen Buddhism has had a profound influence on Japanese culture and lifestyle. It emphasizes mindfulness, meditation, and simplicity. Zen gardens, with their carefully arranged rocks and raked gravel, are a reflection of this philosophy.</li>
        <li><strong>Seasonal Festivals (祭り, Matsuri):</strong> Japan has numerous festivals throughout the year, each celebrating the changing seasons, local traditions, or historical events. These festivals are often characterized by colorful parades, traditional costumes, and street food stalls.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4 text-green-400">Modern Lifestyle:</h2>
      <p className="mb-4">
        Japan's modern lifestyle is a fascinating blend of innovation, efficiency, and cultural preservation.
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li><strong>Technology:</strong> Japan is known for its cutting-edge technology, from bullet trains to robots. The country is at the forefront of innovation in fields such as electronics, automotive engineering, and robotics.</li>
        <li><strong>Fashion:</strong> Japanese fashion is diverse and eclectic, ranging from traditional kimono to avant-garde streetwear. Tokyo, in particular, is a global fashion hub known for its vibrant street style and fashion subcultures.</li>
        <li><strong>Cuisine:</strong> Japanese cuisine is renowned for its emphasis on fresh, seasonal ingredients and meticulous preparation. From sushi and sashimi to ramen and tempura, Japanese food offers a rich tapestry of flavors and textures.</li>
        <li><strong>Work Culture:</strong> Japan's work culture is known for its dedication, discipline, and long hours. Salarymen and office workers often put in overtime, and work-life balance can be a challenge. However, there's also a growing movement towards promoting wellness and reducing overtime hours.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4 text-green-400">Pop Culture:</h2>
      <p className="mb-4">
        Japan's pop culture has a global influence, from anime and manga to J-pop and video games.
      </p>
      <ul className="list-disc pl-8">
        <li><strong>Anime and Manga:</strong> Japan is the birthplace of anime (animated TV shows and films) and manga (comic books). These art forms cover a wide range of genres and have a dedicated fanbase worldwide.</li>
        <li><strong>J-pop:</strong> Japanese pop music, or J-pop, encompasses a diverse range of styles, from catchy idol songs to edgy rock bands. J-pop stars often have a massive following and influence trends in fashion and entertainment.</li>
        <li><strong>Video Games:</strong> Japan is a powerhouse in the video game industry, with companies like Nintendo, Sony, and Capcom leading the way. From classic franchises like Super Mario and Final Fantasy to innovative indie games, Japanese games are beloved by gamers around the world.</li>
      </ul>
    </div>
    <motion.div className="" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{ delay:.3, duration:.4}}>
    <SliderScroll/>
    </motion.div>
   </section>
  );
}

export default About;
