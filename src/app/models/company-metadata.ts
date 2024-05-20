export  interface CompanyMetadata {
    title: string;
    description: string;
    logoUrl: string;
    faq: FAQ[];
}

export interface FAQ {
    question: string;
    answer: string;
}
