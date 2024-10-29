import { SEO_KEY_WORDS, SITE_NAME } from '@/constants/seo/seo.constants';
import React from 'react';

const Head = () => {
  return (
      
			 <head>
        <link
				rel='icon'
				href='/favicon.ico'
				type='image/x-icon'
			/>  


<meta
				name='description'
				content={SEO_KEY_WORDS}
			/>
			<meta
				property='og:title'
				content={SITE_NAME}
			/>
			<meta
				property='og:description'
				content={SEO_KEY_WORDS}
			/>


<meta
				name='robots'
				content='index, follow'
			/>



      {/* Structured Data */}
			<script type='application/ld+json'>
				{`
			{
				"@type": "WebSite",
				"name": "grniusschool",
				"url": "https://genius-school.kg",
				"description": "Развиваем таланты ваших детей с заботой и вниманием"
			}
			`}
			</script>

       </head>
  );
};

export default Head;