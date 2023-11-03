
import OpenAI from "openai";

const apiKey = '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';
const openai = new  OpenAI({
  apiKey, dangerouslyAllowBrowser: true
});

export default async function imgCreate(title, news) {
  try {
    const sentencesArray = news.split('. ');
    const response = await openai.images.generate({
      prompt: `news picture of ${title}.`,
      n: 5,
      size: "256x256",
    });
    console.log("이미지 생성 성공: ", response.data);

    if (response.data && response.data.length > 0 && response.data[0].url) {
        const arr = [response.data[0].url, 
        title,
        response.data[1].url,
        sentencesArray[0],
        response.data[2].url, 
        sentencesArray[1],
        response.data[3].url,
        sentencesArray[2],
        response.data[4].url, 
        sentencesArray[3]
        ];
        return arr;
    } else {
      // Handle the case where 'data' is not present or does not contain a URL
      console.log('No image URL found in the response');
      return null; // or a default value, or throw an error
    }
  } catch (error) {
    console.error('Error generating image:', error);
    // Return or handle the error as appropriate
    return null; // or a default value, or throw the error
  }
}

