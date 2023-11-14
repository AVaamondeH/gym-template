export enum SelectedPage {
    Home = "home",
    Benefits = "beenefits",
    OurClasses = "ourclasses",
    ContactUs = "contactUs",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}