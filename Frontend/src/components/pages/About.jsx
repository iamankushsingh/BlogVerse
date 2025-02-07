import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About Us</h2>
        <p>
        Welcome to BlogVerse, the ultimate platform for passionate writers and readers! 
        Whether you're a seasoned blogger or just starting, BlogVerse provides you with 
        the tools to express your thoughts, share your stories, and connect with a vibrant 
        community of like-minded individuals. Our goal is to create a space where creativity
         flows freely, and every voice has the chance to be heard. Join us today and become 
         a part of the BlogVerse experience—where ideas come to life!
        </p>
        <p>
        Our mission at BlogVerse is to empower individuals to express themselves freely, 
        without limitations. We believe in the power of words to inspire, educate, and 
        bring about change. That's why we offer a wide range of tools, from customizable
         themes to advanced analytics, to help you create high-quality content and track 
         your blog's growth. Whether you're writing about technology, lifestyle, health, 
         or anything in between, BlogVerse gives you the resources to make your blog stand out.
        </p>
       
        <p>
        At BlogVerse, we also value community. Our platform isn't just about writing—it's 
        about connecting with others, sharing insights, and engaging in meaningful 
        conversations. With a vibrant community of bloggers and readers, you can discover
         new content, interact with other creators, and build lasting relationships.
          Join BlogVerse today and be part of a supportive environment where your 
          ideas can flourish and your voice can make an impact.
        </p>
      </div>
    </article>
  );
};

export default About;