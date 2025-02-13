import React from 'react';

const cookiePolicyData = {
  title: 'COOKIE POLICY',
  useOfCookies: 'We use Cookies to provide you with a better user experience when you visit or use our website or application.',
  whatAreCookies: `Cookies are small pieces of data sent from a website that are stored in a user's web browser while they are browsing a particular website. Each time the user loads a website, the browser sends cookies related to that website back to the site server to notify it of the user's activity on the website. Cookies are often used as a mechanism by websites to remember activities that a website browser had done in the past; for example, clicking on particular buttons, logging in, or having read pages on the site months or years ago.`,
  cookieTypes: [
    {
      type: 'Strictly Necessary Cookies',
      description: 'These are a mandate for our website or application to operate. They include, but are not limited to, cookies that enable you to log into secure areas of our website and use the online services.'
    },
    {
      type: 'Analytical/Performance Cookies',
      description: 'These cookies help us identify and count the number of visits by a user. They also help qualify and quantify how visitors move around on our website or application. This helps us improve our website by optimizing maximum used areas of the site and in making them user-friendly.'
    },
    {
      type: 'Functionality Cookies',
      description: 'We use these cookies to improve the functional performance of our website, thus personalizing it for you, e.g., keeping you logged in or keeping your shopping cart as you had previously left it.'
    }
  ],
  cookieManagement: `You can manage cookies by changing or activating the settings on your web browser, which would allow you to either accept or refuse the settings of some or all cookies. If you wish to manage your preferences regarding cookies, refer to online help files available using your web browser for detailed instructions. Alternatively, you can visit https://www.aboutcookies.org for further information.`,
  refusalNote: `Please note, if you refuse to accept cookies from our website, you may not be able to use some additional features that the website offers. In fact, some areas of the website may not be accessible at all.`
};

const CookiePolicy = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8">
      <h2 className="text-2xl font-bold text-center mb-4">{cookiePolicyData.title}</h2>
      <p className="text-gray-700 mb-4">{cookiePolicyData.useOfCookies}</p>
      <p className="text-gray-700 mb-4">{cookiePolicyData.whatAreCookies}</p>
      <h3 className="text-xl font-bold mb-2">In general, we use the following cookies:</h3>
      {cookiePolicyData.cookieTypes.map((cookie, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-bold">{cookie.type}</h4>
          <p className="text-gray-700">{cookie.description}</p>
        </div>
      ))}
      <p className="text-gray-700 mb-4">{cookiePolicyData.cookieManagement}</p>
      <p className="text-gray-700">{cookiePolicyData.refusalNote}</p>
    </div>
  );
};

export default CookiePolicy;