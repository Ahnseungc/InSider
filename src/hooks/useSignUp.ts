import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { SEVER_URL } from '@/constants/baseUrl';
import { reqSignUp } from '@/models/sign';

const signUp = async (userInfo: reqSignUp) => {
  const res = await axios.post(`${SEVER_URL}/general/users/sign-up`, userInfo);

  return res.data;
};

export default function useSignUp() {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      console.log('회원가입 성공');
    },
    onError: error => {
      console.error('회원가입 실패:', error);
    },
  });
}

/**
 * No description
 *
 * @tags useSignIn
 * @name AppControllerInitialize
 * @summary 로그인 요청
 * @request POST:
 * @secure /wards/sign-up
 */
