---
sidebar_position: 10
---

# Dynamic Creative Optimization

:::info
About building dynamic creatives:
https://support.google.com/richmedia/topic/7410422?hl=en&ref_topic=7486153

About preview dynamic creatives:
https://support.google.com/richmedia/topic/6273205?hl=en&ref_topic=7486153
:::

[to complete - some official docs]

:::caution
WORK IN PROGRESS - Pablo / Dawi
:::

## Feed configuration

The Generate Code contains some important information, such as the Profile Id and the general structure of the data feed you'll be using. The Generate Code is the tool you need to develop your creative unit in a dynamic way.

Data team should be responsible for setting up the Studio environment and handing you the Generate Code.

You must replace Studio's Generated Code in the getDynamicData() function in the getDynamicData.js file of your project.



```js
export default function getDynamicData() {

  /*****************************************************************************************************************************
   *  Paste DC Dynamic Code HERE                                                                                               *
   *****************************************************************************************************************************/

  // Dynamic Content variables and sample values
    Enabler.setProfileId(1075235); 
    var devDynamicContent = {};

    devDynamicContent.some_project_name = [{}];
    devDynamicContent.some_project_name[0]._id = 0;
    devDynamicContent.some_project_name[0].Unique_ID = 0;
    devDynamicContent.some_project_name[0].Reporting_Label = "UnitedKingdom_ENT_Ecosystem_EcommerceOneClickIntegrations_CeramistStudio";
    devDynamicContent.some_project_name[0].Headline_Copy_Reporting = "One-click ecommerce integrations_Connect your online store in no time_Email + SMS just got easier";
    devDynamicContent.some_project_name[0].Image_Series_Reporting = "CeramistStudio";
    devDynamicContent.some_project_name[0].Image_Reporting = "CeramistStudioPotteryWheel_CeramistSmilingStudio_WooCommerce";
    devDynamicContent.some_project_name[0].CTA_Copy = "Get started";
    devDynamicContent.some_project_name[0].CTA_Button_Color = "Charcoal";
    devDynamicContent.some_project_name[0].Background_Color = "Cotton";
    devDynamicContent.some_project_name[0].Footer_Color_Reporting = "Poppy";
    devDynamicContent.some_project_name[0].Headline_Copy = "One-click ecommerce integrations";
    devDynamicContent.some_project_name[0].Image = {};
    devDynamicContent.some_project_name[0].Image.Type = "file";
    devDynamicContent.some_project_name[0].Image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60029101/60029101_20220519103038284_Klaviyo_DCO_BG_ENT_Ecosystem_F2_CermasitStudioPotteryWheel_2x_300x600.png";
    devDynamicContent.some_project_name[0].Exit_URL = {};
    devDynamicContent.some_project_name[0].Exit_URL.Url = "https://www.google.com/";
    devDynamicContent.some_project_name[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);

  /*****************************************************************************************************************************
   *  END Paste DC Dynamic Code                                                                                                *
   *****************************************************************************************************************************/

  let feedName = Object.keys(devDynamicContent)[0];

  return window.dynamicContent[feedName][0];
}
```


In your Banner.js file you will be setting up your feed variable with the getDynamicData() function.

```js
async init() {
    ...
    this.feed = getDynamicData();
    ...
}
```

You can now access the dynamic information of the feed by calling its attributes.
This way you are connecting these values to the dynamic data feed. The values will change accordingly once the unit is uploaded to the Studio environment.


```js
async init() {
    ...
    // Select elements
    const title = document.body.querySelector('#title');

    // Asign values
    title1.innerHTML = this.feed.Headline_Copy;
    ...

}
```



:::info
For further information visit: 
https://support.google.com/richmedia/answer/3526354?hl=en#zippy=%2Csample-setup-code-from-step-generate-code
:::

:::caution important
Note that it is possible to receive a multiple-feed Generate Code for your project. Please check the Tips & tricks section for further information.
:::


## Tips & tricks
[to complete]

## Enabler

The Enabler is a library required for all DCO creatives in Studio. It provides a singleton object in the global namespace called Enabler. You can call methods on it.
The Enabler ensures that your creative includes standard tracking functionality for metrics.

In the index.hbs file of your project you will find the script tag that links to the Enabler. You must also set the Profile Id number here.

```js
  <script src="https://s0.2mdn.net/ads/studio/Enabler.js">
    // please change profile id.
    Enabler.setProfileId(1075235);
  </script>
```

In the Banner.js file, you will find a util that is used to wait for the Enabler to be ready before initializing the banner.

```js
import untilEnablerIsInitialized from '@mediamonks/temple/doubleclick/untilEnablerIsInitialized';
...
  async init() {
    await untilEnablerIsInitialized();
    ...
  }
  ...
```


:::info
The Profile Id number is the code for linking your creative with the Studio profile.

For further information visit https://support.google.com/richmedia/answer/2672553?hl=en
:::

### ExitUrl

If the exit URL is assigned through the feed, you can use something like this in your Banner.js file:
```js
  async init() {
    ...
    this.mainExit = this.feed.exitUrl.Url;
    ...
  }
```

The default method used in our framework is an Enabler method.
The first parameter is an ID that can be used to override the exit later if needed and the second parameter is the URL you've assigned.
```js
  handleClick = () => {
    Enabler.exitOverride('Default Exit', this.mainExit);
  };
```

:::caution important
Producers may ask you to use a different method to cover some specific needs. 

You can find more information about Enabler methods here: https://www.google.com/doubleclick/studio/docs/sdk/html5/en/class_studio_Enabler.html#api
:::

:::info
For further information on DCO exits visit https://support.google.com/richmedia/answer/2664807?hl=en
:::
