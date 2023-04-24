import { TechContent, TechsContainer } from './styles'

import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiElixir,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHeroku,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

import { MdGesture, MdAnimation } from 'react-icons/md'
import { TbBrandReactNative } from 'react-icons/tb'

import logoJWT from '@/assets/jwt.svg'
import logoReactHookForm from '@/assets/reacthookform.svg'
import logoNativeBase from '@/assets/nativebase.svg'
import logoViteJS from '@/assets/vitejs.svg'
import logoFaunaDB from '@/assets/faunadb.svg'
import logoAxios from '@/assets/axios.svg'
import logoZod from '@/assets/zod.svg'
import logoVictory from '@/assets/victory.svg'
import logoPhosphor from '@/assets/phosphor.svg'
import logoYup from '@/assets/yup.svg'
import logoStripe from '@/assets/stripe.svg'
import logoVue from '@/assets/vue.svg'
import logoAsyncStorage from '@/assets/AsyncStorage.png'
import logoReactNavigation from '@/assets/spiro.svg'

import { useTheme } from 'styled-components'

import { ITechsProps } from '@/interfaces/ITechsProps'
import { Tooltip } from '@/components/Tooltip'

export function Techs({
  hasReact,
  hasTypescript,
  hasJavascript,
  hasNetlify,
  hasHeroku,
  hasMongoDB,
  hasJWT,
  hasReactNative,
  hasElixir,
  hasStyledComponents,
  hasGraphQL,
  hasStripe,
  hasSCSS,
  hasSASS,
  hasJest,
  hasVercel,
  hasGestureHandler,
  hasReanimated,
  hasReactNavigation,
  hasTailwind,
  hasReactHookForm,
  hasNativeBase,
  hasNextJS,
  hasVite,
  hasPhosphor,
  hasRadix,
  hasExpo,
  hasChakra,
  hasVue,
  hasFaunaDB,
  hasAxios,
  hasAsyncStorage,
  hasYup,
  hasVictoryNative,
  hasZod,
  hasNodeJS,
  hasRubyOnRails,
  hasBootstrap,
  hasRedux,
  hasFirebase,
  hasExpress,
}: ITechsProps) {
  const { title } = useTheme()
  return (
    <TechsContainer>
      <TechContent hasJavascript={hasJavascript}>
        <Tooltip name='Javascript' icon={<SiJavascript color={'#EFD81D'} />} />
      </TechContent>
      <TechContent hasTypescript={hasTypescript}>
        <Tooltip name='TypeScript' icon={<SiTypescript color={'#2F72BC'} />} />
      </TechContent>
      <TechContent hasReact={hasReact}>
        <Tooltip name='ReactJS' icon={<SiReact color={'#5CCFEE'} />} />
      </TechContent>
      <TechContent hasReactNative={hasReactNative}>
        <Tooltip
          name='React Native'
          icon={<TbBrandReactNative color={'#01A0C8'} />}
        />
      </TechContent>
      <TechContent hasVue={hasVue}>
        <Tooltip name='Vue.JS' icon={<img src={logoVue} />} />
      </TechContent>
      <TechContent hasNextJS={hasNextJS}>
        <Tooltip
          name='NextJS'
          icon={
            <SiNextdotjs
              color={title === 'dark' ? '#F2F2F2' : 'var(--gray-950)'}
            />
          }
        />
      </TechContent>
      <TechContent hasExpo={hasExpo}>
        <Tooltip
          name='Expo'
          icon={
            <SiExpo color={title === 'dark' ? '#BBC3CD' : 'var(--gray-950)'} />
          }
        />
      </TechContent>
      <TechContent hasChakra={hasChakra}>
        <Tooltip name='ChakraUI' icon={<SiChakraui color={'#49C6C0'} />} />
      </TechContent>
      <TechContent hasYup={hasYup}>
        <Tooltip name='Yup' icon={<img src={logoYup} />} />
      </TechContent>
      <TechContent hasVictoryNative={hasVictoryNative}>
        <Tooltip name='Victory Pie' icon={<img src={logoVictory} />} />
      </TechContent>
      <TechContent hasVite={hasVite}>
        <Tooltip name='ViteJS' icon={<img src={logoViteJS} />} />
      </TechContent>
      <TechContent hasFaunaDB={hasFaunaDB}>
        <Tooltip name='FaunaDB' icon={<img src={logoFaunaDB} />} />
      </TechContent>
      <TechContent hasAxios={hasAxios}>
        <Tooltip name='Axios' icon={<img src={logoAxios} />} />
      </TechContent>
      <TechContent hasAsyncStorage={hasAsyncStorage}>
        <Tooltip name='Async Storage' icon={<img src={logoAsyncStorage} />} />
      </TechContent>
      <TechContent hasRadix={hasRadix}>
        <Tooltip
          name='Radix'
          icon={
            <svg
              data-tip='Radix UI'
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill={title === 'dark' ? '#F2F2F2' : 'var(--gray-950)'}
            >
              <path
                d='M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z'
                fill={title === 'dark' ? '#F2F2F2' : 'var(--gray-950)'}
              ></path>
              <path
                d='M12 0H4V8H12V0Z'
                fill={title === 'dark' ? '#F2F2F2' : 'var(--gray-950)'}
              ></path>
              <path
                d='M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z'
                fill={title === 'dark' ? '#F2F2F2' : 'var(--gray-950)'}
              ></path>
            </svg>
          }
        />
      </TechContent>
      <TechContent hasPhosphor={hasPhosphor}>
        <Tooltip name='Phosphor' icon={<img src={logoPhosphor} />} />
      </TechContent>
      <TechContent hasReactNavigation={hasReactNavigation}>
        <Tooltip
          name='React Navigation'
          icon={<img src={logoReactNavigation} />}
        />
      </TechContent>
      <TechContent hasReactHookForm={hasReactHookForm}>
        <Tooltip name='React Hook Form' icon={<img src={logoReactHookForm} />} />
      </TechContent>
      <TechContent hasZod={hasZod}>
        <Tooltip name='Zod' icon={<img src={logoZod} />} />
      </TechContent>
      <TechContent hasGestureHandler={hasGestureHandler}>
        <Tooltip name='Gesture Handler' icon={<MdGesture color='#001A71' />} />
      </TechContent>
      <TechContent hasReanimated={hasReanimated}>
        <Tooltip name='Reanimated' icon={<MdAnimation color='#001A71' />} />
      </TechContent>
      <TechContent hasVercel={hasVercel}>
        <Tooltip
          name='Vercel'
          icon={
            <SiVercel
              color={title === 'dark' ? '#F2F2F2' : 'var(--gray-950)'}
            />
          }
        />
      </TechContent>
      <TechContent hasNetlify={hasNetlify}>
        <Tooltip name='Netlify' icon={<SiNetlify color={'#37A4B2'} />} />
      </TechContent>
      <TechContent hasTailwind={hasTailwind}>
        <Tooltip name='Tailwind' icon={<SiTailwindcss color={'#38BDF8'} />} />
      </TechContent>
      <TechContent hasStyledComponents={hasStyledComponents}>
        <Tooltip
          name='Styled Components'
          icon={<SiStyledcomponents color={'#EBAC9D'} />}
        />
      </TechContent>
      <TechContent hasElixir={hasElixir}>
        <Tooltip name='Elixir' icon={<SiElixir color={'#AD38E9'} />} />
      </TechContent>
      <TechContent hasSCSS={hasSCSS}>
        <Tooltip name='SCSS' icon={<SiCss3 color={'#C26192'} />} />
      </TechContent>
      <TechContent hasSASS={hasSASS}>
        <Tooltip name='SASS' icon={<SiSass color={'#C26192'} />} />
      </TechContent>
      <TechContent hasGraphQL={hasGraphQL}>
        <Tooltip name='GraphQL' icon={<SiGraphql color={'#D932A2'} />} />
      </TechContent>
      <TechContent hasStripe={hasStripe}>
        <Tooltip name='Stripe' icon={<img src={logoStripe} />} />
      </TechContent>
      <TechContent hasRedux={hasRedux}>
        <Tooltip name='Redux' icon={<SiRedux color={'#7248B7'} />} />
      </TechContent>
      <TechContent hasFirebase={hasFirebase}>
        <Tooltip name='Firebase' icon={<SiFirebase color={'#F7C52F'} />} />
      </TechContent>
      <TechContent hasJest={hasJest}>
        <Tooltip name='Jest' icon={<SiJest color={'#BC3A14'} />} />
      </TechContent>
      <TechContent hasNodeJS={hasNodeJS}>
        <Tooltip name='NodeJS' icon={<SiNodedotjs color={'#529F41'} />} />
      </TechContent>
      <TechContent hasExpress={hasExpress}>
        <Tooltip name='Express' icon={<SiExpress color={'#7B7B7B'} />} />
      </TechContent>
      <TechContent hasMongoDB={hasMongoDB}>
        <Tooltip name='MongoDB' icon={<SiMongodb color={'#3E9738'} />} />
      </TechContent>
      <TechContent hasJWT={hasJWT}>
        <Tooltip name='JWT' icon={<img src={logoJWT} />} />
      </TechContent>
      <TechContent hasNativeBase={hasNativeBase}>
        <Tooltip name='Native Base' icon={<img src={logoNativeBase} />} />
      </TechContent>
      <TechContent hasHeroku={hasHeroku}>
        <Tooltip name='Heroku' icon={<SiHeroku color={'#3E0094'} />} />
      </TechContent>
      <TechContent hasRubyOnRails={hasRubyOnRails}>
        <Tooltip
          name='Ruby on Rails'
          icon={<SiRubyonrails color={'#C20000'} />}
        />
      </TechContent>
      <TechContent hasBootstrap={hasBootstrap}>
        <Tooltip name='BootStrap' icon={<SiBootstrap color={'#7011EB'} />} />
      </TechContent>
    </TechsContainer>
  )
}
