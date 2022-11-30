import { createClient } from "next-sanity";

export default   createClient({

    projectId:'aq21poev',
    dataset:'production',
    apiVersion: '2021-10-21',
    useCdn:false,
  });