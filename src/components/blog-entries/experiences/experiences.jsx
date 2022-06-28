import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryList from "../../entry-components/entry-list/entry-list";

function Experiences() {
  const top = useRef(null);
  const colleagues = useRef(null);
  const apprenticeship = useRef(null);
  const daily = useRef(null);
  const quit = useRef(null);
  const last = useRef(null);
  return (
    <EntryBody reference={top}>
      <EntryHeader
        title="Experiences working as a software developer"
        date="21.06.2022"
        author="Florian Erwerth"
        time="5"
      ></EntryHeader>
      <EntryBody.Text>
        I will talk about my experiences in my jobs. This will target the daily
        business, the colleagues, my apprenticeship and will also cover why I
        left the company, where I worked since 01.02.2022.
      </EntryBody.Text>
      <EntryList>
        <EntryList.Element clickRef={apprenticeship}>
          Apprenticeship
        </EntryList.Element>
        <EntryList.Element clickRef={colleagues}>Colleagues</EntryList.Element>
        <EntryList.Element clickRef={daily}>Daily Business</EntryList.Element>
        <EntryList.Element clickRef={quit}>
          Leaving the T-Systems and regreting it
        </EntryList.Element>
        <EntryList.Element clickRef={last}>Last words</EntryList.Element>
      </EntryList>
      <EntryBody.Subtitle reference={apprenticeship}>
        Apprenticeship
      </EntryBody.Subtitle>
      <EntryBody.Text>
        My apprenticeship began on the 09/01/2019 and ended on the 02/19/22 I
        dropped out from my informatics studies at the Hochschule München and
        discovered programming using Java. I experimented a lot with{" "}
        <EntryBody.Link href="https://processing.org/">
          Processing.js
        </EntryBody.Link>{" "}
        and its visual opportunities.
      </EntryBody.Text>
      <EntryBody.Text>
        Because of this two factors I decided to apply for a apprenticeship as
        Fachinformatiker für Anwendungsentwicklung. That is how it is called in
        Germany. But basically that means software developer.
      </EntryBody.Text>
      <EntryBody.Text>
        I landed a apprenticeship at the T-Systems Multimedia Solutions, a
        subcompany of the Deutsche Telekom. There I worked with Augmented
        Reality and Virtual Reality in the frontend. The apps where created in
        the Unity game engine, which I did not know when I was starting the
        apprenticeship.
      </EntryBody.Text>
      <EntryBody.Text>
        A really good thing about the T-Systems MMS was its hands-on mentality.
        That lead to the fact, that in my first weak I already started
        programming. Since I did not know anything about Unity I started with
        tutorials, which were made by Unity.
      </EntryBody.Text>
      <EntryBody.Text>
        The apprenticeship in Germany works with two pillars: The company, where
        you learn all practical things and the school, where you gain the
        theoretical knowledge. This is called duale Ausbildung in Germany, which
        means something like dual apprenticeship.
      </EntryBody.Text>
      <EntryBody.Text>
        The schooling was great, because a lot of the topics in the school were
        very interesting and had a wide variety. It gave about 8 different
        subjects. Business administration, information technology, programming
        and sports for example.
      </EntryBody.Text>
      <EntryBody.Text>
        In information technology our topics were centered around the computer
        and its technologies. We learned the binary and the hexadecimal system.
        We learned about the BIOS and the motherboard and also more detailed
        things about the different ways to transport signals on the motherboard.
      </EntryBody.Text>
      <EntryBody.Text>
        Programming was all about Java. At first we learned the syntax, which
        was not very difficult, since I have learned all of it at my studies.
        After that we jumped into object oriented programming, different
        diagrams and also advanced syntax. The most interesting topic was
        recursion, where we had to find solutions for simple problems like the
        fibonacci series.
      </EntryBody.Text>
      <EntryBody.Text>
        At the end of the apprenticeship there naturally is a big exam. The exam
        consists of two parts: a classical exam, where you have to solve task by
        hand and a project, that you program. This project has to relate to the
        working field of your company. In my case I programed a modular
        component kit for VR.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={colleagues}>Colleagues</EntryBody.Subtitle>
      <EntryBody.Text>
        The colleagues in the T-Systems always were very friendly and it was a
        pleasure to work with them. The cool thing about programing for the
        T-Systems is not only the technologies but the fact that many people
        from other areas like consulting or design are working together with you
        to create an idea. This leads to a variety of impact when it comes to
        app design.
      </EntryBody.Text>
      <EntryBody.Text>
        I could not get to know every colleague, though, because of the negative
        impact of corona. In the middle of my apprenticeship we suddendly were
        not longer allowed to go to the office and meet other people. That lead
        to the fact, that I only talked to colleagues, that worked with me on
        projects. Situations like meeting some new people by the coffee machine
        seized to exist.
      </EntryBody.Text>
      <EntryBody.Text>
        In the school that was an other situation of course. The class did exist
        throughout the whole apprenticeship. Some changed the mind and switched
        to another apprenticeship or switched to the university, but the hard
        core remained the same.
      </EntryBody.Text>
      <EntryBody.Text>
        This was the fact until the 3rd an last year began. In germany there is
        the possibility to shorten the apprenticeship, if you are good enough
        and your company also allows it. So a few people, like me, took the
        shorter, but harder path and shortened the apprenticeship by a half
        year. To do so we were put in a special class.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={daily}>Daily Business</EntryBody.Subtitle>
      <EntryBody.Text>
        The daily business was the following: Every day there were tasks, that
        had to be made. This tasks were organized on a jira board as we worked
        agily. Tasks were sorted by the priority.
      </EntryBody.Text>
      <EntryBody.Text>
        A task were always be created by the leader of a project and every
        project had its own weekly. In my whole time at the T-Systems I had
        about 5-6 projects. One of them was long term but the others mostly
        lasted a short period of time.
      </EntryBody.Text>
      <EntryBody.Text>
        Every monday of a new week there also was a weekly team meeting of the
        whole team in Munich, where I worked. This meeting was voluntarily, but
        there were always colleagues in it. The reason for this meeting was to
        motivate people, meet people, talk about problems of the current
        projects and help each other out.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={quit}>
        Leaving the T-Systems and regreting it
      </EntryBody.Subtitle>
      <EntryBody.Text>
        As the title says I leaved the T-Systems because of a miscommunication
        in the takeover. I wanted to continue working for the T-Systems because
        of my good experiences and the interesting field, but I also wanted to
        start distance learning at the International University and wanted to
        work part time.
      </EntryBody.Text>
      <EntryBody.Text>
        At least 6 months before the takeover process began I communicated, that
        I wanted to work part time, but at the moment of truth the part time
        aspect could not be fulfilled. I was afraight, that I will not be able
        to study at the IU and work fulltime successfully, so I quitted the job.
      </EntryBody.Text>
      <EntryBody.Text>
        I found a new company, that sounded very interesting. The title of my
        employment was Web-Frontend Developer, but my task were not exactly
        frontend. I had to create interfaces between existing services for
        browsers, what is more like middleware or backend.
      </EntryBody.Text>
      <EntryBody.Text>
        For two months I learned the topic but eventually I had to admit to
        myself, that this field was nothing for me. Especially because I
        specifically searched for a job as frontend developer working with
        React.
      </EntryBody.Text>
      <EntryBody.Text>
        To be honest I felt betrayed and that lead to the fact that was more and
        more frustrated. I talked to my boss about it, but he could not really
        do something about it, because the foundation for frontend web
        development in the projects in the company was and is non existent. So
        in the future was no grasp of hope for me.
      </EntryBody.Text>
      <EntryBody.Text>
        The frustration and the feeling to be betrayed lead to the fact, that I
        did not want to work for the company anymore. From the beginning I had
        not much in common with my colleagues and because of the feelings I
        withdrew myself from the other colleagues. I felt more and more like an
        stranger in that company. I decided to quit and started to search for a
        new job.
      </EntryBody.Text>
      <EntryBody.Text>
        During this period of time I did regret that I decided to leave the
        T-Systems. The reason why I left the T-Systems was that I were not
        allowed to work part time but it came out, that that was not the case.
        As I already mentioned there was only a miscommunication. In addition to
        that it turned out, that the distance learning was not hard at all and
        working part time is not necessary.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={apprenticeship}>
        Last words
      </EntryBody.Subtitle>
      <EntryBody.Text>
        The apprenticeship was really nice and I was enjoying it from the start
        until the end. I work as a software developer, which is not only
        financially rewarding but also the thing I love to do.
      </EntryBody.Text>
      <EntryBody.Text>
        In addition to that I was lucky to land a job at the T-Systems, which
        was a very good company for the apprenticeship and teached me enough to
        be attractive on the job market.
      </EntryBody.Text>
      <EntryBody.Text>
        The bad experiences with the company after the T-Systems were not only
        bad, because I learned some important lessons. I learned, that everybody
        has to make sure to ask enough questions at the job interviews to make
        sure, that the work is suitable. In addition to that it is important to
        ask if you are allowed to get to know the future colleagues, before you
        sign the contract.
      </EntryBody.Text>
      <EntryBody.Text>
        You have to get away well with your colleagues, because you are spending
        a lot of time with them!
      </EntryBody.Text>
    </EntryBody>
  );
}

export default Experiences;
