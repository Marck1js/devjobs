import React from "react";
import styles from "./DescriptionJob.module.scss";
const DescriptionJob = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.mainDescription}>
        <div className={styles.descriptionJob}>
          <p className={styles.descriptionJobTopText}>
            <span>1w ago</span> - <span>part time</span>
          </p>
          <p className={styles.descriptionJobCenterText}>
            senior software engineer
          </p>
          <p className={styles.descriptionBottomCenterText}>united kingdom</p>
        </div>
        <button className={styles.applyNow}>apply now</button>
      </div>
      <div className={styles.aboutJob}>
        <p className={styles.aboutTextJob}>
          Scoot is looking for a Senior Software Engineer passionate about
          building approachable, innovative and user-first experiences to join
          our small but growing Engineering team. You will be responsible for
          building and maintaining front end functionality across all of Scoot’s
          applications, fostering a growing team of software engineers, and
          helping drive and maintain best software patterns and practices in our
          codebase.
        </p>
      </div>
      <div className={styles.requirementsJob}>
        <h3 className={styles.requirementSection}>Requirements</h3>
        <p className={styles.requirementTextJob}>
          The ideal candidate is as passionate about solving challenges through
          technology. They are well-versed in building proof of concepts from
          scratch and taking these POCs to production and scale. The right fit
          will have the engineering experience to build and iterate quickly and
          is comfortable working with product and design to set the technical
          strategy and roadmap.
        </p>

        <ul className={styles.listRequirementsJob}>
          <li>
            5+ years of industry experience in a software engineering role,
            preferably building a SaaS product. You can demonstrate significant
            impact that your work has had on the product and/or the team.
          </li>
          <li>
            Experience with scalable distributed systems, both built from
            scratch as well as on AWS primitives.
          </li>
          <li>Extremely data-driven.</li>
          <li>Ability to debug complex systems.</li>
        </ul>

        <h3 className={styles.requirementSection}>what you will do</h3>

        <p className={styles.requirementTextJob}>
          We are looking for a Senior Software Engineer to join as one of our
          first hires. As we iterate on our MVP, you will have the opportunity
          to drive the vision and own the build behind our digital experience.
          You’ll have the support of an experienced technical advisor, a Head of
          Product, and an external team to work with.
        </p>

        <ol className={`${styles.ol} ${styles.listRequirementsJob}`}>
          <li>
            This role is for someone who is excited about the early stage -
            you’ll be responsible for turning the platform vision into reality
            through smart, efficient building and testing.
          </li>
          <li>
            Translate the product roadmap into engineering requirements and own
            the engineering roadmap
          </li>
          <li>
            Work with limited resources to test and learn as efficiently as
            possible, while laying the framework to build a more scalable
            product over time.
          </li>
          <li>
            Collaborate with product, design, and external engineering teammates
            as needed.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DescriptionJob;
