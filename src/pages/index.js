  import Head from 'next/head'
  import Image from 'next/image'
  import { Inter } from 'next/font/google'
  import styles from '@/styles/Home.module.css'
  import 'materialize-css/dist/css/materialize.min.css';
  import { FaChevronRight, FaLaptop } from 'react-icons/fa';
  import { FaChevronLeft } from 'react-icons/fa';
  import { FaLaptopBinary } from 'react-icons/fa';
  import { FaLaptopCode } from 'react-icons/fa';
  import { FaCanadianMapleLeaf } from 'react-icons/fa';
  import { FaShieldVirus } from 'react-icons/fa';



  const inter = Inter({ subsets: ['latin'] })

  export default function Home() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Head>
          <title>OWASP Top 10 Canada</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <header className="flex flex-col sm:flex-row items-center justify-between py-4">
      <h1 className="text-3xl font-bold text-gray-900">
        
        Top 10 Guide for 🇨🇦 Security Developers</h1>
     

      <nav className="flex flex-col sm:flex-row items-center">
  <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start space-x-4 sm:space-x-8">
    <li className="w-full sm:w-auto">
      
      <a href="https://aahmed.ca/" className="text-gray-600 hover:text-gray-900 flex items-center">
        This app presents OWASP Top 10 vulnerabilities that may be of use for federal developers.
        <i className="material-icons left align"><FaLaptopCode /></i>

      </a>
    </li>
  </ul>
</nav>

    </header>
          <br/>

          <main>
            <p className="text-xl font-bold text-gray-900">This web app is Top 10 Canada, a website that lists and provides links to the top 10 potential vulnerabilities in Canadian government systems as identified by OWASP.
            <b> Information is provided courtesy of <a href="https://owasp.org/">The Open Web Application Security Foundation(https://owasp.org/)</a>.</b>
            <br/><br/>This app is intended to be used by developers and security professionals to help identify and mitigate vulnerabilities in their critical infrastructure / systems.

            </p>
            <br/>

            <p className="text-xl font-bold text-gray-900">To get started, please select a vulnerability from the list below:</p>

            <ul className="collection">
    <li className="collection-item">
      <a href="https://owasp.org/Top10/A01_2021-Broken_Access_Control/"> A01:2021-Broken Access Control
      <i className="material-icons right"><FaChevronRight /></i>
      </a>
      
      </li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A02_2021-Cryptographic_Failures/">A02:2021-Cryptographic Failures
    <i className="material-icons right"><FaChevronRight /></i>
    
    </a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A03_2021-Injection/">A03:2021-Injection
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A04_2021-Insecure_Design/">A04:2021-Insecure Design
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A05_2021-Security_Misconfiguration/">A05:2021-Security Misconfiguration
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/">A06:2021-Vulnerable and Outdated Components
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/">A07:2021-Identification and Authentication Failures
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/">A08:2021-Software and Data Integrity Failures
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/">A09:2021-Security Logging and Monitoring Failures
    <i className="material-icons right"><FaChevronRight /></i></a></li>
    <li className="collection-item"><a href="https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/">A10:2021-Server-Side Request Forgery
    <i className="material-icons right"><FaChevronRight /></i></a></li>
  </ul>



    
          
          </main>
          
        </div>
    

        <br/>



        <footer className="bg-gray-100 py-4">

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative"  style={{textAlign: "center"}}>
  
    <p className="text-sm text-gray-600 absolute top-1/2 transform -translate-y-1/2 w-full"><a href="https://aahmed.ca">© 2023 Ashar Ahmed. Made in Canada by Ashar Ahmed.</a></p>
  </div>
</footer>




        </div>
        
      );
    }

