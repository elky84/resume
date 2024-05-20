import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import MajorExperienceItem from './MajorExperienceItem';

const MajorExperienceContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const MajorExperience: React.FC = () => {
  return (
    <MajorExperienceContainer>
      <Typography variant="h4" gutterBottom>
        주요 업무 경험
      </Typography>
      
      <MajorExperienceItem
        title="웹&플랫폼 백엔드를 경험하고자 한 이유"
        topics={[
          {
            title: "C++을 오래 써오던 2012년 어느 날",
            description:
              "CTO님께서 Ruby on Rails로 만든 Dev Toy를 들고 오셨습니다.\n간단한 로그 시각화였는데, 그 생산성에 대해서 크게 강조하셨고, 계속 써보라고 독려하셨습니다.\n결국 Ruby on Rails와 함께 Ruby를 AWS 서버 관리 자동화 스크립트로 사용하게 됐습니다."
          },
          {
            title: "NHN에 입사하면서 웹에 대한 호기심",
            description:
              "NHN은 네이버에서 분사한 회사로 자바의 회사였습니다.\n당연히 웹과 플랫폼 모두 자바였으며, 자바와 스프링을 접하기 좋은 환경이 됐습니다.\n이후 C# ASP.NET CORE, Kotlin Spring, Python Django, Node.js, Nest.js 등 다양한 웹 프레임워크를 잘 활용하는 방식에 대한 인사이트와 이해도를 가지는 것이 가져다 주는 즐거움을 가지고, 이러한 방향 즐기게 됐고 많은 웹 개발자들이 가지는 인사이트와, 로우 레벨을 베이스로 한 소켓 서버 개발자이자 게임 서버 개발자가 가지는 인사이트를 잘 활용하는 개발자를 지향하게 됐습니다."
          }
        ]}
      />

      <MajorExperienceItem
        title="클라이언트 경험"
        topics={[
          {
            title: "게임 클라이언트 개발자로 근무하면서",
            description:
              "게임 클라이언트 개발자로 근무하면서 클라이언트 개발에 대한 열정을 키우고, 여러 게임 프로토타입을 만들며 경험을 쌓았습니다."
          },
          {
            title: "클라이언트 경험을 노력을 들여 병행한 이유",
            description:
              "서버만으로는 게임이 완성되지 못한 이유도 있고, 만들고 싶었던 게임을 만들기 어려웠음. 또한 함께 협업하는 티어에 대한 이해도가 있어야 좋은 게임을, 좋은 제품을 만들 수 있기 때문이었습니다."
          }
        ]}
      />

      <MajorExperienceItem
        title="관리자로 일할 때"
        topics={[
          {
            title: "개발 문화 정비",
            description:
              "제품 개선을 위해 개발 문화를 정비하고, 성과 지향적인 접근과 팀워크를 조화롭게 유지하는데 노력했습니다. \n구두 일일 스크럼에 의존하던 업무를 모든 기록은 Notion과 Obsidian으로 하고, 기록 기반의 소통으로 바꾸었으며, 구현 우선 순위를 높이고 일정의 단위를 결과물을 내는 단위로 규정했습니다."
          }
        ]}
      />

      <MajorExperienceItem
        title="트러블 슈트"
        topics={[
          {
            title: "덤프 분석",
            description:
              "C++ 기반의 Raw TCP 소켓 서버에서 다양한 이슈에 대응하고, 덤프 분석을 통해 Heap Corruption, Memory Leak, Dangling Pointer 등의 문제를 해결했습니다."
          },
          {
            title: "배포 플랫폼 장애",
            description:
              "배포 플랫폼에서 발생한 장애를 해결하면서 DNS 문제를 해결하는 등의 과정을 거쳤습니다. \n이를 통해 트러블 슈팅 능력을 키웠고, 이슈 발생 시 로그 기록의 중요성을 깨달았습니다."
          }
        ]}
      />

      <MajorExperienceItem
        title="스타트업 경험"
        topics={[
          {
            title: "스타트업 경험",
            description: "지인이 창업했던 회사에서 CTO가 퇴사하고, 새로운 CTO를 찾는다고 연락을 받았습니다.\n 합류하고 나서 빠르게 기능을 구현하고 방향을 확인한 뒤, 상황에 맞는 판단을 하는 일을 하였습니다. \n이를 통해 균형잡힌 판단력과 신속한 의사결정 능력을 기를 수 있었습니다."
          }
        ]}
        />
    
    </MajorExperienceContainer>
    );
};
   
export default MajorExperience;
