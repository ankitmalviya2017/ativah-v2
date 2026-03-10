import React from "react";
import { SectionContainer } from "../../../section-container/SectionContainer";
import { SectionTitle } from "../../../section-title/SectionTitle";
import { ImageCard } from "../../../cards/image-card/ImageCard";

const moods = [
  {
    id: 1,
    title: "Summer",
    image:
      "https://images.unsplash.com/photo-1525049964585-70335832a4e9?w=800&q=80",
    link: "/mood/summer",
  },
  {
    id: 2,
    title: "Dinner",
    image:
      "https://images.unsplash.com/photo-1510419358249-14a9c68ea78f?w=800&q=80",
    link: "/mood/dinner",
  },
  {
    id: 3,
    title: "Work",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
    link: "/mood/work",
  },
  {
    id: 4,
    title: "Luxury",
    image:
      "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=800&q=80",
    link: "/mood/luxury",
  },
  {
    id: 5,
    title: "Basics",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    link: "/mood/basics",
  },
];

export const ShopByMood = () => {
  return (
    <SectionContainer className="bg-gray-50">
      <SectionTitle
        title="Shop By Mood"
        subtitle="Curated collections for every vibe"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[600px]">
        {/* Large item taking up 2 rows on desktop */}
        <div className="lg:col-span-2 lg:row-span-2 h-[400px] lg:h-full">
          <ImageCard
            title={moods[0].title}
            image={moods[0].image}
            link={moods[0].link}
            description="Explore our new summer essentials"
          />
        </div>

        {/* Top right */}
        <div className="h-[300px] lg:h-full">
          <ImageCard
            title={moods[1].title}
            image={moods[1].image}
            link={moods[1].link}
          />
        </div>

        {/* Top far right */}
        <div className="h-[300px] lg:h-full">
          <ImageCard
            title={moods[2].title}
            image={moods[2].image}
            link={moods[2].link}
          />
        </div>

        {/* Bottom right */}
        <div className="h-[300px] lg:h-full">
          <ImageCard
            title={moods[3].title}
            image={moods[3].image}
            link={moods[3].link}
          />
        </div>

        {/* Bottom far right */}
        <div className="h-[300px] lg:h-full">
          <ImageCard
            title={moods[4].title}
            image={moods[4].image}
            link={moods[4].link}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
