// apenas uma implementação simples a titulo de organização.
export interface HomeContentDataModel {
    title: string;
    text: string;
}
export interface HomeDataResponseModel{
    success: boolean;
    status: string;
    data: HomeContentDataModel;
}