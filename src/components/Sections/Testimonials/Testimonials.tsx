import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Container } from "@/components/Container";
import { TestimonialsCarousel } from "@/components/Carousels/TestimonialsCarousel";
import { Box } from "@/components/Box";

const Testimonials = React.forwardRef<any, any>((props, ref) => {

  const ClientsAvatars = useStaticQuery(graphql`
    query {
      NicolaeGudumac: file(name: { eq: "NicolaeGudumac" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 60, width: 60, quality: 100)
        }
      }
      CristianSava: file(name: { eq: "CristianSava" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 60, width: 60, quality: 100)
        }
      }
      StanislavSava: file(name: { eq: "StanislavSava" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 60, width: 60, quality: 100)
        }
      }
      CristianMiu: file(name: { eq: "CristianMiu" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 60, width: 60, quality: 100)
        }
      }
    }
  `);
  return (
    <Container paddingTop="10rem" id="testimonials" ref={ref}>
      <TestimonialsCarousel
        testimonals={[
          {
            avatar: ClientsAvatars.NicolaeGudumac,
            client: "Nicolae Gudumac",
            role: "Founder & CTO at Planable",
            description:
              "Grigore has been an awesome team member, very focused and hardworking. Always willing to learn and experiment with something new. Quick at finding solutions and very respnsive.",
          },
          {
            avatar: null,
            client: "Gary O'Neill",
            role: "Founder at Scope Tickets",
            description:
              "Grigore's work on our project exceeded our expectations. The deliverable was completed promptly and he was communicable throughout the entirety. We look forward to working with Grigore again soon and would recommend him highly to anybody seeking an effective, communicative contractor!",
          },
          {
            avatar: ClientsAvatars.CristianSava,
            client: "Cristian Sava",
            role: "Founder at Compire",
            description:
              "Grigore was one of the most dedicated professionals through his work at Compire. I would recommend him with any project that requires the very best in Frontend Development.",
          },
          {
            avatar: null,
            client: "C. Kinsella",
            role: "Founder at Scope Tickets",
            description:
              "It was a pleasure working with Grigore for our project. He is prompt, polite and clear in his communications. The work was completed quickly and exceeded our expectations. Grigore also made himself available for questions to help us understand the work he had done. We would be delighted to work with him again and are happy to recommend him to anyone in need of a quality web/React developer.",
          },
          {
            avatar: ClientsAvatars.StanislavSava,
            client: "Stanislav Sava",
            role: "Founder & CTO at Alterbyte",
            description:
              "Grigore is a person who has great skills and deep experience of advanced business solutions. He showed a high level of technical skills and was a valuable contributor to our projects.",
          },
          {
            avatar: null,
            client: "Sachin Chaudhry",
            role: "Founder at Scope Tickets",
            description:
              "Grigore was nothing short of amazing during this project. He knows AWS in and out. He also works super quickly and efficiently. He also worked with every small detail I wanted to get done without any hesitation so that the project is absolutely perfect. He used Amplify, CodeCommit, Cognito, S3, API Gateway, DynamoDB, and more, and implemented it using CloudFormation. And he has a great attitude about everything too.",
          },
          {
            avatar: ClientsAvatars.CristianMiu,
            client: "Cristian Miu",
            role: "Founder at IdeaAdvertising",
            description:
              "Great freelancer !He helped me to fix all the issues on my mobile app. Grigore is a great React Native developer and I definitely would like to work again on similar projects.",
          },
          {
            avatar: null,
            client: "Javier Santolaria",
            role: "Founder at XR Market",
            description:
              "Grigore is the best developer I've ever worked with. Incredibly fast, thoughtfull and mastered the technologies of the project (Javascript, React, Supabase, AWS). The communication was perfect during the whole project and he is really proactive. I will work again with him in the future! Thanks Grigore!",
          },
        ]}
      />
    </Container>
  );
});

export { Testimonials }
