import React, { useState } from "react";
import '@fontsource/montserrat'; // Defaults to weight 400

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
  const links = [
    {
        name: 'Orders',
        icon: (
          <div className="group">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white group-hover:stroke-purple-800 transition-all duration-300"
            >
              <path
                d="M1 15L21 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11 5C11 5 12.5 3.96638 12.5 2.69135C12.5 0.436216 9.5 0.436216 9.5 2.69135C9.5 3.96638 11 5 11 5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M2 15L2.62127 17.4851C2.84385 18.3754 3.64382 19 4.56155 19L17.4384 19C18.3562 19 19.1561 18.3754 19.3787 17.4851L20 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.5 12.5C19.0017 8.27683 15.3861 5 11 5C6.61386 5 2.99834 8.27683 2.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ),
      }
       ,
       {
        name: 'Menu',
        icon: (
          <div className="group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white group-hover:stroke-purple-800 transition-all duration-300"
            >
              <path
                d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 7H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
      }
      ,
      {
        name: 'Order History',
        icon: (
                <div className="flex items-center space-x-4 group"> <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white group-hover:stroke-purple-800 transition-all duration-300"
            >
              <path
                d="M17.952 7.60633L20.4622 7.45352C18.6629 2.70453 13.497 -0.000330181 8.4604 1.3445C3.09599 2.77686 -0.0903694 8.26083 1.34347 13.5933C2.77731 18.9257 8.28839 22.0874 13.6528 20.655C17.6358 19.5915 20.4181 16.2944 21 12.4841"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
      }
      ,
      {
        name: 'Insights',
        icon: (
          <div className="group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white group-hover:stroke-purple-800 transition-all "
            >
              <path
                d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M5 20C5.43938 16.8438 7.67642 8.7643 10.4282 8.7643C12.3301 8.7643 12.8226 12.6353 14.6864 12.6353C17.8931 12.6353 17.4282 4 21 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
      }
      ,
      {
        name: 'Reviews',
        icon: (
          <div className="group">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white group-hover:stroke-purple-800 transition-all duration-300"
            >
              <path
                d="M12.7276 2.44418L14.4874 5.99288C14.7274 6.48687 15.3673 6.9607 15.9073 7.05143L19.0969 7.58575C21.1367 7.92853 21.6167 9.42059 20.1468 10.8925L17.6671 13.3927C17.2471 13.8161 17.0172 14.6327 17.1471 15.2175L17.8571 18.3125C18.417 20.7623 17.1271 21.71 14.9774 20.4296L11.9877 18.6452C11.4478 18.3226 10.5579 18.3226 10.0079 18.6452L7.01827 20.4296C4.8785 21.71 3.57865 20.7522 4.13859 18.3125L4.84851 15.2175C4.97849 14.6327 4.74852 13.8161 4.32856 13.3927L1.84884 10.8925C0.389 9.42059 0.858948 7.92853 2.89872 7.58575L6.08837 7.05143C6.61831 6.9607 7.25824 6.48687 7.49821 5.99288L9.25802 2.44418C10.2179 0.518607 11.7777 0.518607 12.7276 2.44418Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
      }
      ,
      {
        name: 'Payout',
        icon: (
          <div className="group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white group-hover:stroke-purple-800 transition-all "
            >
              <path
                d="M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M14 10.1278C14 10.542 14.3358 10.8778 14.75 10.8778C15.1642 10.8778 15.5 10.542 15.5 10.1278H14ZM9.75 13.8726C9.75 13.4584 9.41421 13.1226 9 13.1226C8.58579 13.1226 8.25 13.4584 8.25 13.8726H9.75ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L12.75 7ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM12 11.1062C11.0478 11.1062 10.5431 10.9543 10.2922 10.7864C10.1056 10.6615 10 10.4909 10 10.1278H8.5C8.5 10.8783 8.76936 11.572 9.45777 12.0328C10.0819 12.4507 10.9522 12.6062 12 12.6062V11.1062ZM10 10.1278C10 9.86732 10.1424 9.56819 10.4989 9.30676C10.855 9.04566 11.3833 8.86133 12 8.86133V7.36133C11.0979 7.36133 10.2512 7.6284 9.61196 8.09711C8.97319 8.56549 8.5 9.2746 8.5 10.1278H10ZM12 8.86133C12.6167 8.86133 13.145 9.04566 13.501 9.30676C13.8576 9.56819 14 9.86732 14 10.1278H15.5C15.5 9.27459 15.0268 8.56549 14.388 8.09711C13.7488 7.6284 12.9021 7.36133 12 7.36133V8.86133ZM14.25 13.8726C14.25 14.3084 14.0711 14.5775 13.7369 14.777C13.3572 15.0037 12.7608 15.1391 12 15.1391V16.6391C12.896 16.6391 13.7997 16.4865 14.5057 16.065C15.2573 15.6163 15.75 14.8772 15.75 13.8726H14.25ZM12 15.1391C11.3002 15.1391 10.7004 14.9471 10.2971 14.676C9.88907 14.4018 9.75 14.1036 9.75 13.8726H8.25C8.25 14.7554 8.78251 15.4654 9.46029 15.921C10.1428 16.3797 11.0429 16.6391 12 16.6391V15.1391ZM12 12.6062C12.9582 12.6062 13.5279 12.7501 13.8421 12.9537C14.088 13.1131 14.25 13.354 14.25 13.8726H15.75C15.75 12.951 15.412 12.1837 14.6579 11.6949C13.9721 11.2504 13.0418 11.1062 12 11.1062V12.6062ZM12.75 8.11133L12.75 7L11.25 7L11.25 8.11133L12.75 8.11133ZM11.25 15.8891V17H12.75V15.8891H11.25Z"
                fill="currentColor"
              />
            </svg>
            
          </div>
        ),
      }
      ,
      { 
        name: 'Restaurant Info', 
        icon: (
            
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"   className="stroke-white group-hover:stroke-purple-800 transition-all ">
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.992 8H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        ) 
      }
      ,
    { name: 'Help Center', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"  className="stroke-white group-hover:stroke-purple-800 transition-all "
>
        <path d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M9 8C9 6.89543 9.89543 6 11 6C12.1046 6 13 6.89543 13 8C13 8.39815 12.8837 8.76913 12.6831 9.08079C12.0854 10.0097 11 10.8954 11 12V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M10.992 16H11.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
         },
  ];

  return (
<div>
      <button
        className="fixed top-4 left-4 z-50 bg-purple-800 text-white p-2 rounded-full shadow-lg focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "❌" : "☰"}
      </button> 

    <div
    className={`transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } fixed top-0 left-0 md:relative md:translate-x-0 transition-transform duration-300`}
  >
    <div className="bg-purple-900 text-white w-64 min-h-screen p-4">
    <div className='p-4 m-2'>
        <svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_118_16606)">
<path d="M42.9807 8.29881C47.1793 8.29881 50.5927 11.6707 50.5927 15.8161C50.5927 19.364 48.0891 22.3461 44.7339 23.1307V31.5365C48.2109 31.1644 51.3527 29.6919 53.7976 27.4815C55.1108 26.2932 56.2246 24.8915 57.0779 23.3312C58.3031 21.0963 58.9999 18.5358 58.9999 15.8157C58.9999 7.08112 51.8278 0 42.9807 0C40.9039 0 38.917 0.389856 37.0952 1.10095V11.0554C38.4919 9.37348 40.612 8.29881 42.9807 8.29881Z" fill="white"/>
<path d="M41.4005 23.3317H33.742V0H33.6653H25.3348H25.2581V23.3317H17.5996V31.6323H25.2581V54.9639H25.3348H33.6653H33.742V31.6323H41.4005V23.3317Z" fill="white"/>
<path d="M57.0775 31.6675C56.7468 31.0624 56.3772 30.4814 55.9715 29.9263C53.8248 31.8613 51.2936 33.2701 48.5643 34.0819C49.8234 35.423 50.5932 37.2155 50.5932 39.1835C50.5932 43.328 47.1785 46.6994 42.9808 46.6994C40.612 46.6994 38.4915 45.6261 37.0962 43.9437V53.8982C38.9175 54.6084 40.9036 54.9991 42.9808 54.9991C49.0729 54.9991 54.369 51.6424 57.0775 46.699C58.3032 44.4637 59 41.9035 59 39.183C59 36.4625 58.3032 33.9024 57.0775 31.667V31.6675Z" fill="white"/>
<path d="M5.20225 27.482C7.64723 29.6919 10.7894 31.1649 14.266 31.5369V23.1312C10.9108 22.3461 8.40717 19.3645 8.40717 15.8161C8.40717 11.6707 11.8206 8.29881 16.0192 8.29881C18.3875 8.29881 20.508 9.37348 21.9047 11.0554V1.10095C20.0829 0.389856 18.0959 0 16.0192 0C7.17204 0 0 7.08112 0 15.8161C0 18.5362 0.696762 21.0972 1.92196 23.3317C2.77531 24.8915 3.8886 26.2937 5.20225 27.482Z" fill="white"/>
<path d="M16.0192 46.6999C11.8215 46.6999 8.40672 43.3284 8.40672 39.1839C8.40672 37.216 9.17658 35.4231 10.4356 34.0824C7.70635 33.2711 5.17517 31.8618 3.02848 29.9268C2.62323 30.4819 2.25319 31.0629 1.92241 31.668C0.696761 33.9033 0 36.4634 0 39.1839C0 41.9045 0.696761 44.4646 1.92241 46.6999C4.63139 51.6429 9.9275 55.0001 16.0192 55.0001C18.0964 55.0001 20.0824 54.6089 21.9038 53.8991V43.9446C20.5084 45.6266 18.3879 46.7004 16.0192 46.7004V46.6999Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_118_16606">
<rect width="59" height="55" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
<div className='p-4'>
      <p className="mb-6 font-montserrat">Restaurant Partner</p>
       <hr/>
      <nav className="space-y-4 p-4">
        {links.map((link, idx) => (
         <a
         key={idx}
         href="#"
         className="flex items-center space-x-2 py-2 px-1 rounded hover:bg-white hover:text-purple-800 hover:font-bold"
         style={{ borderRadius: "1px 30px 30px 1px" }}
       >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
      </div>
      <div className='mt-28'>
        <hr/>
      <div className="relative bottom-4 left-8 mt-20">
        <div className='flex items-center space-x-2 py-2 px-4 cursor-pointer '><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.02331 4.5C2.59826 6.11238 1 8.86954 1 12C1 16.9706 5.02944 21 10 21C14.9706 21 19 16.9706 19 12C19 8.86954 17.4017 6.11238 14.9767 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 1V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       <p>Logout</p>
</div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;



