/**
 * Created by nicorama on 24/06/2017.
 */
export interface User {
  id: number;
  name: string;
  admin?: boolean;
  email: string;
  statement?: string; // Ouch !!
}
