import axios from "axios";
import * as FileSystem from 'expo-file-system';

export async function GetFaceExpression(imageUri) {

    try {
        // Read the file as Base64
        const base64Data = await FileSystem.readAsStringAsync(atob(imageUri), {
            encoding: FileSystem.EncodingType.Base64,
        });

        const fullBase64 = `data:image/jpg;base64,${base64Data}`;

        const data = {
            imgBase64: fullBase64,
        };

        const config = {
            method: 'post',
            url: 'http://164.68.107.70:5075/api/v1/FaceExpression',
            headers: {},
            data: data,
        };

        // Wait for the API response
        const response = await axios(config);
        
        // Log or return the response
        // console.log("Response from API:", JSON.stringify(response.data));
        return response?.data; // Return the response data

    } catch (error) {
        console.error("Error converting file to Base64:", error);
        return null; // Handle the error and return null
    }

  }


  export async function GetFaceMatchingRequest(imageUri1,imageUri2) {

    try {
        // Read the file as Base64

        console.log("images from smile and nuetral ",atob(imageUri1),atob(imageUri2) )
        const base64Data1 = await FileSystem.readAsStringAsync(atob(imageUri1), {
            encoding: FileSystem.EncodingType.Base64,
        });
        const base64Data2 = await FileSystem.readAsStringAsync(atob(imageUri2), {
            encoding: FileSystem.EncodingType.Base64,
        });
        const fullBase64_1 = `data:image/jpg;base64,${base64Data1}`;
        const fullBase64_2 = `data:image/jpg;base64,${base64Data2}`;

        const data = {
            accuracy:'Low',
            img1Base64: fullBase64_1,
            img2Base64:fullBase64_2
        };

        const config = {
            method: 'post',
            url: 'http://164.68.107.70:5075/api/v1/FaceMatch',
            headers: {},
            data: data,
        };

        // Wait for the API response
        const response = await axios(config);
        
        // Log or return the response
        console.log("Response from face match API:", JSON.stringify(response.data));
        return response?.data; // Return the response data

    } catch (error) {
        console.error("Error converting file to Base64:", error);
        return null; // Handle the error and return null
    }

  }
