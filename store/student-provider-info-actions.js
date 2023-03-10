import { studentProviderInfoActions } from "./student-provider-info-slice.js";
import { studentCartActions } from "./student-cart-slice.js";

export const fetchProvider = (providerId, studentId) => {
  return async (dispatch) => {
    const fetchProviderHandler = async (providerId) => {
      const res = await fetch(
        `https://backend-mealtrain-order-service-production.up.railway.app/mealtrain/providers/${providerId}`
      );
      const data = await res.json();
      return data;
    };

    const fetchStudentcart = async (studentId) => {
      const res = await fetch(
        `https://backend-mealtrain-order-service-production.up.railway.app/mealtrain/students/${studentId}/cart/`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    };

    try {
      if (studentId) {
        const studentCartData = await fetchStudentcart(studentId);
        dispatch(studentCartActions.replaceCartInfo(studentCartData));
        const providerData = await fetchProviderHandler(providerId);
        dispatch(
          studentProviderInfoActions.replaceProviderInfo([
            providerData,
            studentCartData.cartItem,
          ])
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
};
