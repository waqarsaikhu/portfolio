import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
}

export default function EducationCard({ institution, degree, period, description }: EducationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{degree}</h3>
            <p className="text-primary font-medium">{institution}</p>
          </div>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
