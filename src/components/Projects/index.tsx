import { useContext } from "react";
import { ProfileContext } from "@/contexts/ProfileContext";
import { dateFormatter } from "@/utils/formatter";
import { Cards } from "../Cards";
import { Loading } from "../Loading";

import { ProjectsContainer, ProjectsContent } from "./styles";
import { Title } from "../Title";

export function Projects() {
  const { repositories, loading } = useContext(ProfileContext);

  return (
    <ProjectsContainer>
      <Title type="projects" title="Projetos" />
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
                        repository.name === "ignitegym-native" ||
                        repository.name === "masterclass-reanimated-native" ||
                        repository.name === "ignite-marketspace-native" ||
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
                    repository.name === "masterclass-ui-tailwind" ||
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
                  hasJavascript={repository.language === "JavaScript"}
                  hasTypescript={
                    repository.language === "TypeScript" ||
                    repository.name === "portfolio" ||
                    repository.name === "ignite-dt-money"
                  }
                  hasJest={
                    repository.name === "desafio-truckpag" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "workana-test"
                  }
                  hasMongoDB={
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "resolvelogo-backend"
                  }
                  hasVictoryNative={
                    repository.name === "acesso" ||
                    repository.name === "ignite-react-native-gofinance"
                  }
                  hasStripe={repository.name === "ignite-ignews"}
                  hasFirebase={
                    repository.name === "acesso" ||
                    repository.name === "masterclass-featuretoggle-native" ||
                    repository.name === "gopizza-native"
                  }
                  hasNextJS={
                    repository.name === "masterclass-ui-tailwind" ||
                    repository.name === "ignite-reactjs-04-dashgo" ||
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "ignite-ignews"
                  }
                  hasSASS={
                    repository.name === "ignite-otimizando-aplicacao" ||
                    repository.name === "ignite-ignews"
                  }
                  hasReactNavigation={
                    repository.name === "acesso" ||
                    repository.name === "rocketseat-react-native-nubank" ||
                    repository.name === "rocketseat-omnistack-10" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name === "ignite-marketspace-native" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "igniteshoesapp" ||
                    repository.name === "rocketseat-NLW5-ReactNative" ||
                    repository.name === "ignitegym-native"
                  }
                  hasChakra={repository.name === "ignite-upload-de-imagens"}
                  hasNodeJS={
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "resolvelogo-backend" ||
                    repository.name === "rocketseat-nlw1"
                  }
                  hasExpress={
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "resolvelogo-backend" ||
                    repository.name === "rocketseat-nlw1"
                  }
                  hasReact={
                    repository.name === "masterclass-ui-tailwind" ||
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
                    repository.name === "codeleap-challenge"
                  }
                  hasVue={repository.language === "Vue"}
                  hasYup={
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "ignitegym-native" ||
                    repository.name === "ignite-marketspace-native" ||
                    repository.name === "bossabox-vuttr" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "portfolio" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native" ||
                    repository.name === "igniteshoesapp" ||
                    repository.name === "desafio-pagcom"
                  }
                  hasReanimated={repository.name === "ignite-ignitequiz-native"}
                  hasGestureHandler={
                    repository.name === "ignite-ignitequiz-native"
                  }
                  hasPhosphor={
                    repository.name === "ignite-ignitequiz-native" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "ignite-github-blog"
                  }
                  hasNativeBase={
                    repository.name === "ignite-marketspace-native" ||
                    repository.name === "ignitegym-native"
                  }
                  hasExpo={
                    repository.name === "ignite-ignitequiz-native" ||
                    repository.name === "gopizza-native" ||
                    repository.name === "masterclass-featuretoggle-native" ||
                    repository.name === "ignitegym-native" ||
                    repository.name === "masterclass-reanimated-native" ||
                    repository.name === "ignite-marketspace-native" ||
                    repository.name === "rocketseat-NLW5-ReactNative" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native" ||
                    repository.name === "igniteshoesapp" ||
                    repository.name ===
                      "ignite-react-native-chapter-ii-desafio-02"
                  }
                  hasElixir={
                    repository.name === "ignite-sumlist-elixir" ||
                    repository.name === "ignite-reports_generator-elixir" ||
                    repository.name === "ignite-listfilter-elixir" ||
                    repository.name === "ignite-lenghtlist-elixir"
                  }
                  hasReactNative={
                    repository.name === "ignite-ignitequiz-native" ||
                    repository.name === "acesso" ||
                    repository.name === "gopizza-native" ||
                    repository.name === "masterclass-featuretoggle-native" ||
                    repository.name === "ignitegym-native" ||
                    repository.name === "ignite-marketspace-native" ||
                    repository.name === "masterclass-reanimated-native" ||
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
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01"
                  }
                  hasAxios={
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "ignite-marketspace-native" ||
                    repository.name === "ignitegym-native" ||
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
                    repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery"
                  }
                  hasJWT={
                    repository.name === "ignitegym-native" ||
                    repository.name === "resolvelogo-backend"
                  }
                  hasReactHookForm={
                    repository.name === "ignitegym-native" ||
                    repository.name === "ignite-react-native-gofinance" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "portfolio" ||
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name ===
                      "ignite-react-native-capter-ii-desafio-01" ||
                    repository.name === "ignite-marketspace-native"
                  }
                  hasFaunaDB={
                    repository.name === "ignite-upload-de-imagens" ||
                    repository.name === "ignite-ignews"
                  }
                  hasTailwind={repository.name === "masterclass-ui-tailwind"}
                  hasAsyncStorage={
                    repository.name === "ignitegym-native" ||
                    repository.name === "ignite-marketspace-native" ||
                    repository.name === "gopizza-native" ||
                    repository.name === "daily-diet-native" ||
                    repository.name === "todolist-native"
                  }
                  hasStyledComponents={
                    repository.name === "acesso" ||
                    repository.name === "gopizza-native" ||
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
                    repository.name === "codeleap-challenge"
                  }
                  hasZod={repository.name === "ignite-dt-money"}
                  hasRadix={repository.name === "ignite-dt-money"}
                  hasVite={
                    repository.name === "ignite-reactjs-01-fundamentos" ||
                    repository.name === "ignite-reactjs-desafio-01" ||
                    repository.name === "portfolio" ||
                    repository.name === "desafio-pagcom" ||
                    repository.name === "ignite-dt-money" ||
                    repository.name === "ignite-github-blog" ||
                    repository.name ===
                      "ignite-reactjs-challenge-2-coffee-delivery" ||
                    repository.name === "codeleap-challenge"
                  }
                  last_commit={dateFormatter(new Date(repository.pushed_at))}
                  iconButton={"GitHub"}
                  href={repository.html_url}
                />
              </div>
            ))}
          </>
        )}
      </ProjectsContent>
      <Title type="projects" title="/Projetos" />
    </ProjectsContainer>
  );
}
