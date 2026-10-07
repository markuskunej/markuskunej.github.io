import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import InstacartLogo from "../assets/logos/instacart.png";
import TorontoLogo from "../assets/logos/utoronto.png";
import HuaweiLogo from "../assets/logos/huawei.svg";
import UntetherLogo from "../assets/logos/untether.jpeg";
import NorthParkLogo from "../assets/logos/north-park.png";
import "../styles/Experience.css";

function ExperienceHeader({ logo, name, wide = false, children }) {
  return (
    <div className="experience-header">
      <img
        className={`experience-logo${wide ? " experience-logo--wide" : ""}`}
        src={logo}
        alt={`${name} logo`}
      />
      <div className="experience-header-text">{children}</div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2024 – Jun 2026"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <ExperienceHeader logo={InstacartLogo} name="Instacart">
            <h3 className="vertical-timeline-element-title">
              Software Engineer — ML Platform - Instacart
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          </ExperienceHeader>
          <p>
            Core contributor to Griffin, Instacart's ML platform for training,
            batch inference, and online serving, used by Ads, Economics, Fraud
            Detection, and Batching/Logistics teams.
          </p>
          <ul>
            <li>
              Led the TensorFlow 2.8 to 2.15 migration across training, batch
              inference, serving, and the Griffin SDK; coordinated rollout with
              approximately 8 teams and reduced average serving prediction-step
              latency by 5–10%.
            </li>
            <li>
              Shipped an Arize integration using Temporal workflows for
              training-data uploads and per-model dashboards, enabling live drift
              and accuracy monitoring.
            </li>
            <li>
              Built ML scorecards with Django, React, and Temporal to evaluate
              production models and assign bronze, silver, or gold status.
            </li>
            <li>
              Expanded distributed LightGBM training and batch inference with
              coordinated early stopping, multiclass predictions, labeled
              Snowflake outputs, and preprocessing artifact support.
            </li>
            <li>
              Maintained the Griffin Python SDK, supported production systems
              through the ML Platform on-call rotation, and created Claude Code
              skills and plugins for training-job creation and workflow debugging.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <ExperienceHeader logo={TorontoLogo} name="University of Toronto">
            <h3 className="vertical-timeline-element-title">
              University of Toronto, Toronto, Ontario
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Applied Science in Engineering Science
            </h4>
          </ExperienceHeader>
          <p>
            Engineering Science, Majoring in Machine Intelligence with a
            Certificate in Engineering Business
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <ExperienceHeader logo={HuaweiLogo} name="Huawei">
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern - Huawei Technologies Canada
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Markham, ON</h4>
          </ExperienceHeader>
          <p>
            Worked on Huawei's open-source AI computing framework, Mindspore:
          </p>
          <div>
            <ol style={{ listStyleType: "disc" }}>
              <li>
                Developed a new feature to offload dataset operations from the
                CPU to either a GPU or AI accelerator device, reducing training
                times by 20% on networks such as ResNet and AlexNet. (C++,
                Python)
              </li>
              <li>
                Wrote CPU, GPU, and AI accelerator kernels for MindSpore
                operations, allowing for additional AI networks to be supported
                by their AI framework. (C++, CUDA)
              </li>
              <li>
                Created and ran performance tests on AI networks, analyzing
                loss, accuracy and memory data to locate bottlenecks in the
                system. (Bash, Python)
              </li>
            </ol>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <ExperienceHeader logo={UntetherLogo} name="Untether AI" wide>
            <h3 className="vertical-timeline-element-title">
              Hardware Engineer Intern - Untether AI
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          </ExperienceHeader>
          <p>
            Assisted with the launch of their first AI chip, the runAI200®,
            through the following tasks:
          </p>
          <div>
            <ol style={{ listStyleType: "disc" }}>
              <li>
                Designed Python scripts to test the boundary scan architecture
                (JTAG) of their first-generation AI chip, the runAI200®. Ran
                these scripts on a FPGA device in the lab. (Python, Bash)
              </li>
              <li>
                Wrote firmware used to control the General Purpose Input/Output
                pins and voltages on the tsunAImi® accelerator card. (C)
              </li>
              <li>
                Created register-transfer level (RTL) tests using the cocotb
                verification framework and Synopsys VCS verification. (Python)
              </li>
            </ol>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <ExperienceHeader logo={NorthParkLogo} name="North Park Collegiate">
            <h3 className="vertical-timeline-element-title">
              North Park Collegiate and Vocational School, Brantford, Ontario
            </h3>
          </ExperienceHeader>
          <p> Ontario Secondary School Diploma </p>
          <p>
            Received the Governor General's Academic Medal (Bronze) for the
            highest graduating average at North Park, calculated across all
            Grade 11 and Grade 12 courses.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
