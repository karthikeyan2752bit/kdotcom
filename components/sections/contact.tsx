"use client";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

export function ContactSection() {
	return (
		<SectionShell
			id="contact"
			eyebrow="Contact"
			title="Tell me about your system."
			description="Whether you're planning a new backend, need to stabilize an existing system, or want to automate a workflow, a short call is usually enough to understand next steps."
		>
			<div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
				<div className="space-y-4 text-sm text-zinc-300 sm:text-[15px] sm:leading-relaxed">
					<div className="space-y-2">
						<p>Ideal topics include:</p>
						<ul className="space-y-1 text-xs text-zinc-300 sm:text-sm">
							<li>· Reliability issues in existing backend systems</li>
							<li>· New SaaS backend or internal tooling projects</li>
							<li>· Infrastructure, deployment, and monitoring questions</li>
							<li>· Automation ideas you want to validate</li>
						</ul>
					</div>
				</div>

				<motion.div
					className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-sm shadow-black/60"
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.45, ease: "easeOut" }}
				>
					<form
						action="https://formspree.io/f/xlgwqkok"
						method="POST"
						className="space-y-4 text-sm"
					>
						<div className="grid gap-3 sm:grid-cols-2">
							<Field label="Name" name="name" />
							<Field label="Company" name="company" />
						</div>
						<Field label="Email" name="email" type="email" />
						<Field
							label="What do you need help with?"
							name="message"
							as="textarea"
						/>
						<p className="text-xs text-zinc-500">
							This form is intentionally simple and does not submit anywhere
							yet. You can wire it to your preferred backend or contact method.
						</p>
						<div className="flex items-center justify-between gap-4 pt-2">
							<button
								type="submit"
								className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-medium text-black shadow-[0_18px_40px_rgba(24,24,27,0.9)] transition hover:-translate-y-0.5 hover:bg-zinc-200"
							>
								Connect
							</button>
							<a
								href="mailto:karthikeyan27522752@gmail.com"
								className="text-xs font-medium text-zinc-300 underline-offset-4 hover:underline"
							>
								Or email directly
							</a>
						</div>
					</form>
				</motion.div>
			</div>
		</SectionShell>
	);
}

interface FieldProps {
	label: string;
	name: string;
	type?: string;
	as?: "input" | "textarea";
}

function Field({ label, name, type = "text", as = "input" }: FieldProps) {
	const InputTag = as === "textarea" ? "textarea" : "input";

	return (
		<label className="block text-xs font-medium text-zinc-300">
			<span>{label}</span>
			<InputTag
				name={name}
				className="mt-1 w-full rounded-xl border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition focus:border-zinc-500 focus:bg-black/70 focus:outline-none"
				rows={as === "textarea" ? 4 : undefined}
				type={as === "input" ? type : undefined}
			/>
		</label>
	);
}

