import React from "react";

const Cyber = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Cyber Cell</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="flex flex-col w-full desk:w-2/3">
          <h1 className="text-3xl font-bold text-center ">
            Cyber Cell Policies
          </h1>
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">
              Cybersecurity Awareness and Education
            </h2>
            <p>
              All students, faculty, and staff must attend mandatory
              Cybersecurity awareness workshops conducted by the college cyber
              cell. Regular updates on Cybersecurity threats and prevention
              methods will be shared via email or college portal.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Acceptable Use of College Network</h2>
            <p>
              Use of college internet, Wi-Fi, and other digital resources is for
              academic and research purposes only. Unauthorized use of the
              college network for illegal downloading, uploading, or accessing
              restricted content is strictly prohibited. No attempt should be
              made to bypass network security, including the use of proxy
              servers or VPNs to access blocked sites.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Password Management</h2>
            <p>
              All users must follow strong password protocols: a minimum of 8
              characters, with a combination of uppercase letters, lowercase
              letters, numbers, and symbols. Passwords must be changed every 3
              months, and reuse of previous passwords is not allowed. Sharing
              login credentials with others is prohibited.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Reporting Cyber Incidents</h2>
            <p>
              Any cybersecurity incidents, including phishing attempts, malware
              infections, or unauthorized access, must be reported immediately
              to the college cyber cell. Confidentiality of the person reporting
              the issue will be maintained, and all cases will be handled with
              priority.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Social Media and Online Conduct</h2>
            <p>
              Misuse of social media platforms for harassment, bullying, or
              sharing false information about college activities or personnel
              will result in disciplinary action. Posting college-related
              sensitive data, including research, exam papers, or personal
              details of students and staff, is forbidden.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Cyberbullying and Harassment</h2>
            <p>
              The college has a zero-tolerance policy toward cyberbullying,
              harassment, and other forms of online abuse. Students and staff
              engaging in cyberbullying will face disciplinary action, including
              suspension or expulsion.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Data Protection and Privacy</h2>
            <p>
              Personal data of students and staff, such as email addresses,
              phone numbers, and academic records, should not be shared or
              published without consent. All departments must ensure that
              sensitive data is stored securely and that access to such
              information is restricted to authorized personnel only.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Device Security</h2>
            <p>
              All devices connected to the college network, including personal
              laptops, smartphones, and tablets, must have updated antivirus
              software and operating system patches installed. The use of
              unauthorized external devices like USB drives is prohibited within
              the college network to prevent malware spread.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Use of College Email</h2>
            <p>
              The college-provided email address is to be used for official
              communication only. Use of personal email accounts for official
              college business is discouraged to maintain the security and
              integrity of communications.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Cyber Investigation Protocol</h2>
            <p>
              The cyber cell is authorized to investigate any reported or
              suspected cybercrime activities within the college. The college
              reserves the right to monitor internet usage and digital
              communications when required for security reasons. Violators of
              cyber policies will be subject to disciplinary actions in
              accordance with college regulations, up to legal actions if
              necessary.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Third-Party Software and Apps</h2>
            <p>
              The installation of third-party software or apps on college
              systems requires prior approval from the IT department. Software
              that poses security risks, such as those with known
              vulnerabilities, will not be permitted.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Encryption of Sensitive Data</h2>
            <p>
              Any sensitive data stored or transmitted over the college network
              must be encrypted to prevent unauthorized access. Remote access to
              the college network is allowed only through secure VPN connections
              provided by the college. Unauthorized remote access attempts will
              result in immediate network disconnection and investigation.
            </p>
          </div>{" "}
          <br />
          <div className="flex flex-col gap-0 ">
            <h2 className="font-bold ">Policy Review and Updates</h2>
            <p>
              Cyber cell policies will be reviewed annually, or as needed, to
              address new cybersecurity threats or technological developments.
              The college will communicate any updates or changes to the
              policies to all stakeholders through the official channels. These
              policies aim to create a secure digital environment within the
              college, ensuring the privacy, safety, and proper conduct of
              students and staff online.
            </p>
          </div>{" "}
          <br />
          <div className="">
            <p className="pb-1 text-lg font-semibold ">
              Members of the Cyber Cell includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>Mr. Saurav Dowarah - Convenor </li>
              <li>Mr. Nayan Basu - Asst. Convenor</li>
              <li>Ms. Meyisangla Jamir</li>
              <li>Mr. Rupam Dasgupta</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cyber;
