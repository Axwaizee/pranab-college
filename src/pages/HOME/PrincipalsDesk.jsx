import React from "react";

const principal = "/assets/elements/principal/Principal.webp";

const PrincipalsDesk = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Principal's Desk</p>
      </div>
      <div className="flex flex-col items-center ">
        <div className="p-5">
          <img src={principal} className=" h-[250px] rounded-xl " />
        </div>
        <div className="w-full p-5 pb-10 text-justify desk:w-1/2 dark:text-white">
          <p>
            Twenty-seven years have gone since Pranabananda Women’s College, the
            first women’s college in Nagaland was established in the year 1991.
            Today, the college stands with pride as it has inspired thousands of
            students to live up to its motto, “Lead us from darkness to light”.
            <br />
            <br />
            With a very humble beginning, the college, as we see it today is a
            beautiful campus; the fruit of endless efforts of generous
            benefactors and the goodwill of numerous well-wishers. In the past
            two and half decades of its journey, the college has achieved
            several milestones in promoting quality and holistic education to
            women at the higher education level. The college is now
            self-sustained and equipped with all modern amenities for all-round
            development of its students, supported by a well-qualified,
            disciplined and dedicated teaching staff and non-teaching staff
            members. At the same time, there has also been a steady increase in
            the number of students in the college year after year which stands
            testimony to its steady growth and progress. With a total strength
            of about 1200 students in the current academic session drawn from
            all the nook and corners of Nagaland, the college now stands as one
            of the most renowned institute of higher education for women in
            Nagaland.
            <br />
            <br />
            True to the vision of its founding members, the college since its
            inception has been able to produce excellent academic results both
            at the Higher Secondary and Degree examinations conducted by the
            Nagaland Board of Secondary Education (NBSE) and the Nagaland
            University (NU) respectively. Apart from this, the college has also
            been able to inspire and build generations of young girls to become
            women of character, discipline and responsibility, who are now well
            established in various professional fields and walks of life. All
            these stands testimony to the quality of teaching-learning process
            of the college, its general learning environment, and the sense of
            discipline and dedication of its teaching and non-teaching staff
            members towards their duties and responsibilities. In recognition to
            this pioneering contribution of the college in providing quality and
            holistic education to women at the higher education level, the
            college has earned the status of a permanent affiliation from the
            Nagaland University (NU) and a ‘B’ Grade accreditation from the
            UGC-NAAC.
            <br />
            <br />
            Today, Pranabananda Women’s College has an identity, a name we can
            be proud of. It stands as a symbol of dedication, hard work and
            resultant victory. While remembering its founding members, I
            congratulate each and every member of the Governing Body, the
            teaching staff, the non-teaching staff, both in the past and present
            for their self-less sacrifices to make the college a renowned
            institution of higher education for women, as it is now today.
            Lastly, as envisioned by its founding members, the college will
            continue to inspire and build generations of young girls to become
            women of character, discipline and responsibility who will make
            Nagaland an abode of peace, progress and prosperity.
            <br />
            <br />
            Long live Pranabananda Women’s College!
          </p>
        </div>
      </div>
    </>
  );
};

export default PrincipalsDesk;
