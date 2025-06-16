import BPT from "@/components/custom/BPT";
import Divider from "@/components/custom/Divider";
import GlowingBorderBox from "@/components/custom/GlowingBorderBox";
import LinkWithIcon from "@/components/custom/LinkWIthIcon";

export default function AiImageRole() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <GlowingBorderBox>
        <div className="flex flex-col">
          <div className="font-bold text-[15px] mb-[15px] flex justify-between items-center">
            <p>AI 이미지 생성</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold">
                어떻게 이미지를 생성하였는가
              </p>
              <div className="font-medium text-[13px]">
                <BPT textClassName="font-medium text-[13px]">
                  <LinkWithIcon
                    text="Comfy UI"
                    link="https://github.com/comfyanonymous/ComfyUI"
                  />
                  &nbsp;와{" "}
                  <LinkWithIcon
                    text="Flux 1.1"
                    link="https://bfl.ai/models/flux-kontext"
                  />
                  &nbsp;모델을 활용하여 이미지 제작
                </BPT>
                <BPT textClassName="font-medium text-[13px]">
                  LoRA를 이용한 파인튜닝으로 원하는 상의 이미지 생성 -&gt;
                  지향하는 캐릭터의 LoRA 파일을 외부에서 다운받거나 혹은 직접
                  학습시켜 LoRA 파일을 만든 후 사용
                </BPT>
                <BPT textClassName="font-medium text-[13px]">
                  <LinkWithIcon text="Civit.ai" link="https://civitai.com/" />
                  &nbsp;와 같은 LoRA 공유사이트 활용
                </BPT>
              </div>
            </div>
            <Divider margin="my-0" />
            <div className="flex flex-col gap-4">
              <p className="text-[14px] font-semibold">작업물 살펴보기</p>
              <div className="flex flex-col gap-6">
                <div className="font-medium text-[13px]">
                  <p className="text-[16px] font-bold">
                    류시현 (프로젝트 디토 대표 캐릭터)
                  </p>
                  <div className="flex flex-col mb-[10px]">
                    <BPT>
                      내 아이디는 강남미인의 차은우, 어쩌다 발견한 하루의 로운,
                      이외의 여러 LoRA 사용
                    </BPT>
                    <BPT>
                      <LinkWithIcon
                        text="류시현 인스타그램 바로가기"
                        link="https://www.instagram.com/ryu_xh/"
                      />
                    </BPT>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-full">
                      <img
                        src={"/images/project-ditto/ai-image/ryuxh1.png"}
                        className="size-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={"/images/project-ditto/ai-image/ryuxh2.png"}
                        className="size-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={"/images/project-ditto/ai-image/ryuxh3.png"}
                        className="size-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="font-medium text-[13px]">
                  <p className="text-[16px] font-bold">김이안</p>
                  <div className="flex flex-col mb-[10px]">
                    <BPT>
                      시카고 타자기의 유아인, 알고있지만의 송강, 이외 여러 LoRA
                      사용
                    </BPT>
                    <BPT>
                      <LinkWithIcon
                        text="김이안 인스타그램 바로가기"
                        link="https://www.instagram.com/iankim9381/"
                      />
                    </BPT>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-full">
                      <img
                        src={"/images/project-ditto/ai-image/ian1.png"}
                        className="size-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={"/images/project-ditto/ai-image/ian2.png"}
                        className="size-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full">
                      <img
                        src={"/images/project-ditto/ai-image/ian3.png"}
                        className="size-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlowingBorderBox>
    </div>
  );
}
