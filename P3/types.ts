export type Linkedin = {
    slug: string,
    company_name: string,
    title: string,
    description: string,
    remote: boolean,
    url: string,
    tags: [string],
    job_types: [],
    location: string,
    created_at: number
}
export type LinkList = {
    title: string,
    company_name: string,
    location: string,
}

export type LinkArr={
    data: Linkedin[]
}