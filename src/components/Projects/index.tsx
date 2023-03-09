import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import { dateFormatter } from "../../utils/formatter";
import { Cards } from "../Cards";
import { Loading } from "../Loading";

import { ProjectsContainer, ProjectsContent } from "./styles";

export function Projects() {
  const { repositories, loading } = useContext(ProfileContext);

  return (
    <ProjectsContainer>
      <h1>{"<Projetos>"}</h1>
      <ProjectsContent>
        {loading ? (
          <Loading />
        ) : (
          <>
            {repositories.map((repository) => (
              <div key={repository.id}>
                <Cards
                  colorTop="projects"
                  type={
                    repository.name === "desafio-pagcom" ||
                    repository.name === "workana-test" ||
                    repository.name === "codeleap-challenge" ||
                    repository.name === "desafio-star-wars" ||
                    repository.name === "desafio-truckpag" ||
                    repository.name === "desafio-upnid-uprace"
                      ? "challenge"
                      : repository.name === "UERJ"
                      ? "academic"
                      : repository.name === "ignite-ignews" ||
                        repository.name === "ignite-github-blog" ||
                        repository.name === "rocketseat-omnistack-10" ||
                        repository.name === "ignite-dt-money" ||
                        repository.name ===
                          "ignite-reactjs-challenge-2-coffee-delivery" ||
                        repository.name === "origamid-ranek" ||
                        repository.name ===
                          "ignite-react-native-chapter-ii-desafio-02" ||
                        repository.name ===
                          "ignite-react-native-capter-ii-desafio-01" ||
                        repository.name === "ignite-otimizando-aplicacao" ||
                        repository.name === "ignite-upload-de-imagens" ||
                        repository.name === "ignite-react-native-myskills" ||
                        repository.name === "rocketseat-nlw1" ||
                        repository.name === "ignite-react-native-gofinance" ||
                        repository.name === "ignite-reactjs-desafio-01" ||
                        repository.name ===
                          "ignite-template-react-native-todos" ||
                        repository.name === "ignite-reactjs-01-fundamentos" ||
                        repository.name === "rocketseat-react-native-nubank" ||
                        repository.name === "bossabox-vuttr"
                      ? "bootcamp"
                      : repository.name === "resolvelogo-backend" ||
                        repository.name === "murilojssilva" ||
                        repository.name === "portfolio"
                      ? "personal"
                      : "none"
                  }
                  title={
                    repository.name.length > 20
                      ? `${repository.name.substring(0, 20)}...`
                      : repository.name
                  }
                  stack={
                    repository.name === "portfolio" ||
                    repository.name === "ignite-github-blog" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "murilojssilva" ||
                    repository.name === "codeleap-challenge" ||
                    repository.name === "workana-test" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "desafio-truckpag" ||
                    repository.name === "ignite-ignews" ||
                    repository.name === "ignite-otimizando-aplicacao" ||
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "desafio-upnid-uprace" ||
                    repository.name === "desafio-star-wars" ||
                    repository.name === "origamid-ranek" ||
                    repository.name === "rocketseat-nlw1" ||
                    repository.name === "ignite-reactjs-01-fundamentos" ||
                    repository.name === "ignite-reactjs-desafio-01" ||
                    repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery"
                      ? "frontend"
                      : repository.name === "resolvelogo-backend"
                      ? "backend"
                      : repository.name === "bossabox-vuttr" ||
                        repository.name === "murilojssilva" ||
                        repository.name === "UERJ"
                      ? "fullstack"
                      : "mobile"
                  }
                  hasJavascript={repository.language === "JavaScript" && true}
                  hasTypescript={
                    repository.language === "TypeScript" ||
                    repository.name === "portfolio" ||
                    (repository.name === "ignite-dt-money" && true)
                  }
                  hasJest={
                    repository.name === "desafio-truckpag" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    (repository.name === "workana-test" && true)
                  }
                  hasMongoDB={
                    repository.name === "bossabox-vuttr" ||
                    (repository.name === "resolvelogo-backend" && true)
                  }
                  hasStripe={repository.name === "ignite-ignews" && true}
                  hasNextJS={
                    repository.name === "ignite-reactjs-04-dashgo" ||
                    repository.name === "ignite-upload-de-imagens" ||
                    (repository.name === "ignite-ignews" && true)
                  }
                  hasSASS={
                    repository.name === "ignite-otimizando-aplicacao" ||
                    (repository.name === "ignite-ignews" && true)
                  }
                  hasChakra={
                    repository.name === "ignite-upload-de-imagens" && true
                  }
                  hasNodeJS={
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "resolvelogo-backend" ||
                    (repository.name === "rocketseat-nlw1" && true)
                  }
                  hasExpress={
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "resolvelogo-backend" ||
                    (repository.name === "rocketseat-nlw1" && true)
                  }
                  hasReact={
                    repository.name === "ignite-reactjs-04-dashgo" ||
                    repository.name === "desafio-upnid-uprace" ||
                    repository.name === "rocketseat-nlw1" ||
                    repository.name === "desafio-truckpag" ||
                    repository.name === "ignite-reactjs-01-fundamentos" ||
                    repository.name === "ignite-reactjs-desafio-01" ||
                    repository.name === "portfolio" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "workana-test" ||
                    repository.name === "rocketseat-omnistack-10" ||
                    repository.name === "ignite-github-blog" ||
                    repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery" ||
                    (repository.name === "codeleap-challenge" && true)
                  }
                  hasVue={repository.language === "Vue" && true}
                  hasYup={
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "portfolio" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native" ||
                    repository.name === "igniteshoesapp" ||
                    (repository.name === "desafio-pagcom" && true)
                  }
                  hasPhosphor={
                    repository.name === "ignite-dt-money" ||
                    (repository.name === "ignite-github-blog" && true)
                  }
                  hasExpo={
                    repository.name === "rocketseat-NLW5-ReactNative" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native" ||
                    repository.name === "igniteshoesapp" ||
                    (repository.name ===
                      "ignite-react-native-chapter-ii-desafio-02" &&
                      true)
                  }
                  hasReactNative={
                    repository.name === "rocketseat-NLW5-ReactNative" ||
                    repository.name === "ignite-react-native-myskills" ||
                    repository.name === "ignite-template-react-native-todos" ||
                    repository.name === "rocketseat-react-native-nubank" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native" ||
                    repository.name === "igniteshoesapp" ||
                    repository.name ===
                      "ignite-react-native-chapter-ii-desafio-02" ||
                    (repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" &&
                      true)
                  }
                  hasVictoryNative={
                    repository.name === "ignite-react-native-gofinance" && true
                  }
                  hasAxios={
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "ignite-otimizando-aplicacao" ||
                    repository.name === "desafio-truckpag" ||
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "rocketseat-react-native-nubank" ||
                    repository.name === "portfolio" ||
                    repository.name === "origamid-ranek" ||
                    repository.name ===
                      "ignite-react-native-chapter-ii-desafio-02" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "rocketseat-omnistack-10" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "ignite-github-blog" ||
                    (repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery" &&
                      true)
                  }
                  hasFaunaDB={
                    repository.name === "ignite-upload-de-imagens" ||
                    (repository.name === "ignite-ignews" && true)
                  }
                  hasAsyncStorage={
                    repository.name === "daily-diet-native" ||
                    (repository.name === "todolist-native" && true)
                  }
                  hasStyledComponents={
                    repository.name === "desafio-upnid-uprace" ||
                    repository.name === "desafio-truckpag" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native" ||
                    repository.name === "igniteshoesapp" ||
                    repository.name === "rocketseat-react-native-nubank" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name === "portfolio" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name ===
                      "ignite-react-native-chapter-ii-desafio-02" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "ignite-github-blog" ||
                    repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery" ||
                    (repository.name === "codeleap-challenge" && true)
                  }
                  hasZod={repository.name === "ignite-dt-money" && true}
                  hasRadix={repository.name === "ignite-dt-money" && true}
                  hasVite={
                    repository.name === "ignite-reactjs-01-fundamentos" ||
                    repository.name === "ignite-reactjs-desafio-01" ||
                    repository.name === "portfolio" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "ignite-github-blog" ||
                    repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery" ||
                    (repository.name === "codeleap-challenge" && true)
                  }
                  last_commit={dateFormatter(new Date(repository.pushed_at))}
                  hasLink
                  iconButton={"GitHub"}
                  href={repository.html_url}
                />
              </div>
            ))}
          </>
        )}
      </ProjectsContent>
      <h1>{"</Projetos>"}</h1>
    </ProjectsContainer>
  );
}
