import { Career } from "@/types/Career";
import { Project } from "@/types/Project";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";
import Link from "next/link";

const Bottom = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const career = portfolio.career as Career[];
    const project = portfolio.project as Project[];

    return (
        <div>
            <ol className="flex flex-col items-start justify-start w-[800px] sm:w-full sm:items-center sm:justify-center">
                <p className="font-medium text-[20px] mb-3 sm:w-[370px] sm:font-medium sm:text-[20px]">프로젝트</p>
                {project.map((project, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-start justify-start w-[800px] rounded-lg border border-solid border-disabled p-4 sm:p-6 sm:w-[370px] sm:h-fit sm:items-center sm:justify-center"
                    >
                        <div className="flex flex-col w-[804px] sm:items-center sm:w-full sm:justify-center">
                            {/* 이미지 영역 - 이미지가 있을 경우에만 렌더링 */}
                            <div className="flex flex-row sm:flex-col sm:w-full sm:items-center sm:justify-center">
                                {project.images &&
                                    project.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt="프로젝트"
                                            className="object-cover flex flex-row w-[250.67px] h-[198px] rounded-2xl mr-2 sm:w-[320px] sm:mr-0"
                                            width={800}
                                            height={800}
                                        />
                                    ))}
                            </div>

                            <div className="flex w-full flex-col sm:items-center sm:justify-center sm:w-[370px] sm:ml-3">
                                <div className="flex justify-between w-[804px] mt-2 sm:w-[350px]">
                                    <h3 className="text-[20px] font-medium mb-3 sm:text-[16px] sm:mt-3 sm:mb-0">
                                        {project.name}
                                    </h3>
                                </div>

                                <div className="flex flex-col mt-5 sm:w-[350px]">
                                    <p className="text-[14px] font-normal mb-2 text-gray4 whitespace-pre-wrap sm:w-[345px]">
                                        {project.introduce}
                                    </p>
                                    <time className="text-gray3 text-[12px] font-normal leading-none my-3 sm:text-[10px]">
                                        {project.date}
                                    </time>
                                    {project.githubLink && (
                                        <div className="flex items-center text-gray3 mt-2 sm:w-[350px] sm:flex-wrap">
                                            <Image
                                                src="/assets/image/link.svg"
                                                alt="link"
                                                width={24}
                                                height={24}
                                                className="mr-1"
                                            />
                                            <Link href={project.githubLink}>
                                                <p className="text-[12px]">{project.githubLink}</p>
                                            </Link>
                                        </div>
                                    )}

                                    {project.deployLink && (
                                        <div className="flex items-center text-gray3 mt-2 sm:w-[350px] sm:flex-wrap">
                                            <Image
                                                src="/assets/image/link.svg"
                                                alt="link"
                                                width={24}
                                                height={24}
                                                className="mr-1"
                                            />
                                            <Link href={project.deployLink}>
                                                <p className="text-[12px]">{project.deployLink}</p>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                <div className="bg-deepgray w-[804px] h-[1px] my-10 sm:w-[370px]"></div>
            </ol>

            {career.length > 0 && (
                <div className="flex flex-col items-start justify-start w-[800px] sm:w-full sm:items-center sm:justify-center">
                    <p className="font-medium text-[20px] mb-3 sm:w-[370px] sm:font-medium sm:text-[20px]">업무경력</p>
                    <ol>
                        {career.map((experience, index) => (
                            <li
                                key={index}
                                className="flex mb-5 w-[800px] rounded-lg border border-solid border-disabled p-4 sm:p-6 sm:w-[370px] sm:h-fit sm:items-center sm:justify-center"
                            >
                                <div className="flex w-full flex-col">
                                    {/* 제목과 날짜를 포함하는 영역 */}
                                    <div className="flex justify-between w-[804px] sm:w-[370px]">
                                        <h3 className="text-[16px] font-medium mb-3 sm:text-[16px]">
                                            {experience.company}
                                        </h3>
                                        <time className="text-gray4 text-[12px] font-normal leading-none mr-10">
                                            {experience.date}
                                        </time>
                                    </div>

                                    {/* 설명과 상세 정보를 포함하는 영역 */}
                                    <div className="flex flex-col w-[480px] sm:w-[370px] sm:flex-wrap">
                                        <p className="text-[14px] font-normal mb-2 text-gray4">
                                            {experience.department} / {experience.position}
                                        </p>
                                        <div className="flex flex-col sm:w-[370px] sm:flex-wrap">
                                            <p className="font-normal text-gray4 leading-6 text-[12px] whitespace-pre-wrap">
                                                • {experience.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
            <div className="sm:flex sm:justify-center sm:items-center">
                <div className="bg-deepgray w-[804px] h-[1px] mb-10 mt-6 sm:w-[370px]"></div>
            </div>
        </div>
    );
};

export default Bottom;
