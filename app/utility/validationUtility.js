import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

class ValidationHelper {
  static isLogin() {
    const dispatch = useDispatch();
    useEffect(() => {
      const jwtVerify = async () => {
        try {
          const response = await axios.get("/api/getJWTverify");

          if (response.data.status === "fail") {
            dispatch(setJwtStatus(false)); // Correctly dispatch the action
          } else if (response.data.status === "verified") {
            dispatch(setJwtStatus(true)); // Correctly dispatch the action
            dispatch(setRole(response.data.role));
          }
        } catch (error) {
          dispatch(setJwtStatus(false)); // Handle error case
        }
      };
      jwtVerify();
    }, [dispatch]);
  }

  // image validation utility
  static IsValidImageFileType(filename) {
    return (
      /\.(gif|jpe?g|tiff?|png|webp|bmp|pdf|agif|svg|heic)$/i.test(filename) ||
      /^(image|application)\/(gif|jpeg|tiff|png|webp|bmp|pdf|svg|heic)$/i.test(
        filename
      )
    );
  }

  // undefine validation
  static IsUndefined(value) {
    return typeof value === "undefined";
  }

  static isString(value) {
    return typeof value === "string";
  }

  static isNumber(value) {
    return typeof value === "number";
  }

  static isNullOrUndefined(value) {
    return value === null || typeof value === "undefined";
  }

  static IsNull(value) {
    return value == null;
  }

  static isArray(value) {
    return Array.isArray(value);
  }

  static isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
  }

  static isEmpty(value) {
    return value === null || value === undefined || value.length === 0;
  }

  static isEmail(value) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value);
  }

  static IsDate(value) {
    const DATERegex = /^\d{4}-\d{2}-\d{2}$/;
    return DATERegex.test(value);
  }

  static isDate(value) {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  static isURL(value) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(value);
  }

  static isIPAddress(value) {
    const ipv4Regex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
    return ipv4Regex.test(value) || ipv6Regex.test(value);
  }

  static isValidFileExtension(filename, extensions) {
    const extension = filename.split(".").pop().toLowerCase();
    return extensions.includes(extension);
  }

  static isPasswordConfirmed(password, confirmPassword) {
    return password === confirmPassword;
  }

  static isValidJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }

  static isObject(value) {
    return typeof value === "object" && value !== null;
  }

  static isEmptyObject(obj) {
    // Check if the argument is an object and not null
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    // Check if the object has no own enumerable properties
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false; // If the object has any own properties, it's not empty
      }
    }
    return true; // If the loop completes without finding any own properties, the object is empty
  }
}
export default ValidationHelper;
